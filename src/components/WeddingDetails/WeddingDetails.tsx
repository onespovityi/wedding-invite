import cls from './WeddingDetails.module.scss'
import weddingCouple from '../../assets/img/wedding-couple.jpg';

export const WeddingDetails = () => {
  return <>
    <p className={cls.title}>WEDDING DAY</p>
    <div className={cls.namesContainer}>
      <p className={cls.namesLeft}>{"Sergey"}</p>
      <p className={cls.names}>{"&"}</p>
      <p className={cls.namesRight}>{"Maria"}</p>
    </div>
    <img className={cls.img} width={309} src={weddingCouple} alt='weddingCouple' />
    <p className={cls.inviteText}>Приглашаем Вас отпраздновать <br /> самое важное событие в нашей <br /> жизни - день нашей свадьбы!</p>
  </>
}