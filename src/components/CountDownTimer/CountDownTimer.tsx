import { useState, useEffect } from 'react';
import cls from './CountDownTimer.module.css';
import { getEnding } from '../../utils/getEnding';

const endingsMap = {
  days: ['день', 'дня', 'дней'],
  hours: ['час', 'часа', 'часов'],
  minutes: ['минута', 'минуты', 'минут'],
  seconds: ['секунда', 'секунды', 'секунд'],
};

export const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);
  const weddingDate = '24 august 2024';

  useEffect(() => {
    const targetDate = new Date('2024-08-24T00:00:00');
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      setCountdown(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
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
  );
};