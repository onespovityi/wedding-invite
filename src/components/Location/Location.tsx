import cls from './Location.module.css'
import location from '../../assets/img/GoldenHorse.jpg';

export const Location = () => {
  return (
    <div className={cls.wrap}>
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