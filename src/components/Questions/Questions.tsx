import { FormEvent, useRef } from 'react';
import cls from './Questions.module.css';
import emailjs from '@emailjs/browser';
import { useAnimations } from '../../hooks/AnimationScrolling/useAnimationScroll';

const drinks = ['Шампанское', 'Белое вино', 'Красное вино', 'Водка', 'Коньяк', 'Безалкогольное']

export const Questions = () => {
  const { isShow, blockRef } = useAnimations();

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_bqo0uor', 'template_3mww5kp', form.current, 's_oLP2KJbIPYL8krS')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    (e.target as HTMLFormElement).reset()
  };

  return (
    <div ref={blockRef} className={`${cls.wrap} ${isShow ? cls.elementShow : cls.elementAnimation}`}>
      <p className={cls.title}>QUESTIONS</p>
      <p className={cls.subTitle}>Просим вас ответить на <br /> несколько вопросов, это поможет <br /> нам в организации торжества</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className={cls.questionsContainer}>
          <label className={cls.label}>Ваше имя и фамилия</label>
          <input className={cls.inputName} name='user_name' required />
          <label className={cls.label}>Сможете ли Вы присутствовать?</label>
          <div className={cls.radioWrapper}>
            <label>
              <input className={cls.input} type="radio" name="user_attendance" value="да" required />
              Я смогу/сможем прийти
            </label>
            <label>
              <input className={cls.input} type="radio" name="user_attendance" value="нет" required />
              Я не смогу прийти
            </label>
            <label>
              <input className={cls.input} type="radio" name="user_attendance" value="сообщу позже" required />
              Сообщу позднее
            </label>
          </div>

          <label className={cls.label}>Предпочтения по напиткам</label>
          <div className={cls.checkboxWrapper}>
            {drinks.map((drink) => (
              <label key={drink}>
                <input className={cls.input} type="checkbox" name="user_drinks" value={drink} />
                {drink}
              </label>
            ))}
          </div>

          <button className={cls.button} type='submit'>Отправить</button>
          {/* <p className={cls.privacyPolicy}>Нажимая на кнопку "Отправить" вы соглашаетесь с <br /> {" "}
            <a href=''>Политикой Конфиденциальности</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}