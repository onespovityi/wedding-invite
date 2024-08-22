import { useState, useEffect } from 'react';
import cls from './CountDownTimer.module.css';
import { getEnding } from '../../utils/getEnding';
import { useAnimations } from '../../hooks/AnimationScrolling/useAnimationScroll';

interface CountdownTimerProps {
  isWeddingDay: boolean;
  setIsWeddingDay: (value: boolean) => void;
}

const endingsMap = {
  days: ['день', 'дня', 'дней'],
  hours: ['час', 'часа', 'часов'],
  minutes: ['минута', 'минуты', 'минут'],
  seconds: ['секунда', 'секунды', 'секунд'],
};


export const CountdownTimer: React.FC<CountdownTimerProps> = ({ isWeddingDay, setIsWeddingDay }) => {
  const [countdown, setCountdown] = useState(0);
  const { isShow, blockRef } = useAnimations();
  const weddingDate = '24 august 2024';

  useEffect(() => {
    const targetDate = new Date('2024-08-24T00:00:00');
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setCountdown(0);
        setIsWeddingDay(true);
        clearInterval(interval);
      } else {
        setCountdown(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
    <div ref={blockRef}
      className={`${cls.wrapper} ${isShow ? cls.elementShow : cls.elementAnimation}`}
    >
      {isWeddingDay ?
        <p>ДЕНЬ СВАДЬБЫ НАСТУПИЛ! <br /> ЖДЕМ ВАС!</p> :
        <>
          <p>DATE</p>
          <p className={cls.weddingDate}>{weddingDate}</p>
          <p>ДО СВАДЬБЫ ОСТАЛОСЬ</p>
          <div className={cls.wrap}>
            <div className={cls.weddingDayContainer}>
              <p className={cls.weddingDayData}>
                {days}
              </p>
              <p className={cls.daysCount}>{getEnding(days, endingsMap.days)}</p>
            </div>
            <div className={cls.weddingDayContainer}>
              <p className={cls.weddingDayData}>
                {hours}
              </p>
              <p className={cls.daysCount}>{getEnding(hours, endingsMap.hours)}</p>
            </div>
            <div className={cls.weddingDayContainer}>
              <p className={cls.weddingDayData}>
                {minutes}
              </p>
              <p className={cls.daysCount}>{getEnding(minutes, endingsMap.minutes)}</p>
            </div>
            <div className={cls.weddingDayContainer}>
              <p className={cls.weddingDayData}>
                {seconds}
              </p>
              <p className={cls.daysCount}>{getEnding(seconds, endingsMap.seconds)}</p>
            </div>
          </div>
        </>
      }
    </div>
  );
};