import cls from './Location.module.css'
import location from '../../assets/img/GoldenHorse.jpg';
import { useAnimations } from '../../hooks/AnimationScrolling/useAnimationScroll';

export const Location = () => {
  const { isShow, blockRef } = useAnimations();

  return (
    <div ref={blockRef} className={`${cls.wrap} ${isShow ? cls.elementShow : cls.elementAnimation}`}>
      <p className={cls.title}>LOCATION</p>
      <img width={255} height={305} src={location} alt='GoldenHorse' />
      <p className={cls.location}>Ресторан Golden Horse <br />с. Новобессергеневка, Конюшенный проезд, 102</p>
      <a className={cls.link}
        href='https://yandex.ru/maps/org/golden_khors/77591453289/?ll=38.812233%2C47.217525&z=16'
        target='_blank'
      >
        ПЕРЕЙТИ НА КАРТУ
      </a>
    </div>
  )
}