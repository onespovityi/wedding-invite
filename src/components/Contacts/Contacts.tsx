import cls from './Contacts.module.css'
import whatsapp from '../../assets/img/whatsapp.svg'
import { useAnimations } from '../../hooks/AnimationScrolling/useAnimationScroll';

export const Contacts = () => {
  const { isShow, blockRef } = useAnimations();
  return (
    <div ref={blockRef} className={`${cls.wrap} ${isShow ? cls.elementShow : cls.elementAnimation}`}>
      <p className={cls.title}>CONTACTS</p>
      <p className={cls.subTitle}>По всем возникшим вопросам просьба обращаться к нашему свадебному организатору</p>
      <a href={`tel:7988586714`} className={cls.person}>Виктория</a>
      <a href='https://wa.clck.bar/79885867140' className={cls.whatsApp}>
        <img className={cls.img} src={whatsapp} width={62} height={62} alt='whatsApp' />
      </a>
    </div>
  )
}