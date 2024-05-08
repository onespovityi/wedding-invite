import cls from './Contacts.module.css'
import whatsapp from '../../assets/img/whatsapp.svg'

export const Contacts = () => {
  return (
    <div className={cls.wrap}>
      <p className={cls.title}>CONTACTS</p>
      <p className={cls.subTitle}>По всем возникшим вопросам просьба обращаться к нашему свадебному организатору</p>
      <a href={`tel:7918530141`} className={cls.person}>Алина</a>
      <a href='https://wa.clck.bar/79185301419' className={cls.whatsApp}>
        <img className={cls.img} src={whatsapp} width={62} height={62} alt='whatsApp' />
      </a>
    </div>
  )
}