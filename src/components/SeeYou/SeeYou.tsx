import cls from './SeeYou.module.css'
import heart from '../../assets/img/heart.png'
import { useAnimations } from '../../hooks/AnimationScrolling/useAnimationScroll';


export const SeeYou = () => {
  const { isShow, blockRef } = useAnimations();

  return (
    <div ref={blockRef} className={`${cls.wrap} ${isShow ? cls.elementShow : cls.elementAnimation}`}>
      <p className={cls.title}>See you soon!</p>
      <img src={heart} width={150} height={150} alt='heart' />
    </div>
  )
}