import cls from './SeeYou.module.css'
import heart from '../../assets/img/heart.png'


export const SeeYou = () => {
  return (
    <>
      <p className={cls.title}>See you soon!</p>
      <img src={heart} width={150} height={150} alt='heart' />
    </>
  )
}