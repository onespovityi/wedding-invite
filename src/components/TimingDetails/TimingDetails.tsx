import cls from './TimingDetails.module.css'
import rings from '../../assets/img/rings.svg';
import { useAnimations } from '../../hooks/AnimationScrolling/useAnimationScroll';

const timeDetails = [
  { time: "16:00", event: "Сбор" },
  { time: "16:30", event: "Церемония" },
  { time: "17:30", event: "Банкет" },
  { time: "21:00", event: "Торт" },
]

export const TimingDetails = () => {
  const { isShow, blockRef } = useAnimations();

  return (
    <div ref={blockRef} className={`${cls.wrapper} ${isShow ? cls.elementShow : cls.elementAnimation}`}>
      <p className={cls.title}>TIMING</p>
      <div className={cls.timingWrap}>
        {timeDetails.map(el => (
          <div className={cls.timing} key={el.time}>
            <div className={cls.timingContainer}>
              <img src={rings} alt="rings" />
              <div className={cls.lineContainer}>
                <div className={cls.line}></div>
              </div>
            </div>
            <div className={cls.timeDetails}>
              <p className={cls.time}>{el.time}</p>
              <p>{el.event}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}