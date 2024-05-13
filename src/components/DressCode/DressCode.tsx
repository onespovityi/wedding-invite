import cls from './DressCode.module.css'
import DrCode1 from '../../assets/img/DrCode-1.svg';
import DrCode2 from '../../assets/img/DrCode-2.svg';
import DrCode3 from '../../assets/img/DrCode-3.svg';
import DrCode4 from '../../assets/img/DrCode-4.svg';
import DrCode5 from '../../assets/img/DrCode-5.svg';
import DrCode6 from '../../assets/img/DrCode-6.svg';
import { useAnimations } from '../../hooks/AnimationScrolling/useAnimationScroll';

const dressCodeImg = [
  { img: DrCode1 },
  { img: DrCode2 },
  { img: DrCode3 },
  { img: DrCode4 },
  { img: DrCode5 },
  { img: DrCode6 },
]

export const DressCode = () => {
  const { isShow, blockRef } = useAnimations();

  return (
    <div ref={blockRef} className={`${cls.wrap} ${isShow ? cls.elementShow : cls.elementAnimation}`}>
      <p className={cls.title}>DRESS-CODE</p>
      <p className={cls.subTitle}>Нам будет особенно приятно видеть <br /> вас в цветовой гамме нашей свадьбы</p>
      <div className={cls.groupImg}>
        {dressCodeImg.map(el => (
          <img key={el.img} className={cls.img} width={124} height={69} src={el.img} alt='dressCode' />
        ))}
      </div>
    </div>
  )
}