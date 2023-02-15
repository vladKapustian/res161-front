import { MouseEvent, useState } from "react";
import styles from "./styles.module.css";
import exitCross from "../../assets/images/exitCross.png";
import Image from "next/image";

/** Open  */
export const AboutUsModal = ({ closeModal }: { closeModal: () => void }) => {
  const onModalCkick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div onClick={closeModal} className={styles.background}>
      <div onClick={onModalCkick} className={styles.container}>
        <Image
          onClick={closeModal}
          className={styles.cross}
          src={exitCross}
          alt=""
        />
        <div>
          <p className={styles.title}>КОНТАКТНАЯ ИНФОРМАЦИЯ</p>
          <div>
            <p className={styles.heading}>Наш адрес</p>
            <p className={styles.paragraph}>
              346500, Ростовская область, г. Шахты, ул. Пролетарская, дом 117,
              офис 12
            </p>
          </div>
        </div>
        <div className={styles.gridWrapper}>
          <div>
            <p className={styles.heading}>Телефон</p>
            <p className={styles.paragraph}>
              +7 (938) 111-14-53 <br /> +7 (938) 115-00-80
            </p>
          </div>
          <div>
            <p className={styles.heading}>WhatsApp</p>
            <p className={styles.paragraph}>+7 (938) 111-14-53</p>
          </div>
          <div>
            <p className={styles.heading}>Email</p>
            <p className={styles.paragraph}>
              res161@bk.ru <br /> rostres@bk.ru
            </p>
          </div>
          <div>
            <p className={styles.heading}>График работы</p>
            <p className={styles.paragraph}>
              Пн – пт : <br /> с 8:00 до 18:00 по МСК
            </p>
          </div>
        </div>
        <button onClick={closeModal} className={styles.button}>
          Закрыть
        </button>
      </div>
    </div>
  );
};
