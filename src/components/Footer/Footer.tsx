import styles from "./styles.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className={styles.blockBackground}>
        <div className={styles.container}>
          <div className={styles.linksBlock}>
            <p className={styles.heading}>РостЭнергоСтрой</p>
            <Link className={styles.link} href="/">
              Производство и поставка высоковольтного оборудования
            </Link>
          </div>
          <div className={styles.linksBlock}>
            <Link className={styles.heading} href="#">
              Категории
            </Link>
            <Link className={styles.link} href="#">
              Маслянные выключатели
            </Link>
            <Link className={styles.link} href="#">
              Полюсы выключателей
            </Link>
            <Link className={styles.link} href="#">
              Распределительные устройства
            </Link>
            <Link className={styles.link} href="#">
              Трансформаторы
            </Link>
            <Link className={styles.link} href="#">
              Комплектующие (ЗИП)
            </Link>
          </div>
          <div className={styles.linksBlock}>
            <p className={styles.heading}>Информация</p>
            <p className={styles.text}>
              <p className={styles.text}>346500, Ростовская область,</p>
              <p className={styles.text}>
                г. Шахты, ул. Пролетарская, дом 117,
              </p>
              <p className={styles.text}>офис 12</p>
              <p className={styles.text}>Пн – пт :</p>
              <p className={styles.text}>с 8:00 до 18:00 по МСК</p>
            </p>
          </div>
          <div className={styles.linksBlock}>
            <p className={styles.heading}>Контакты</p>
            <p className={styles.text}>+7 (938) 111-14-53 </p>
            <p className={styles.text}>+7 (938) 115-00-80</p>
            <p className={styles.text}>res161@bk.ru</p>
            <p className={styles.text}>WhatsApp:</p>
            <p className={styles.text}>+7(938) 111-14-53</p>
          </div>
        </div>
      </div>
      <div className={styles.secondBlockBackground}>
        <p className={styles.allRightsReserved}>
          © 2020 res161.ru All rights reserved. Электротехническая компания -
          ООО"РостЭнергоСтрой".
        </p>
      </div>
    </>
  );
};
