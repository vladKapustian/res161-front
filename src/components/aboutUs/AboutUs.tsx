import styles from "./styles.module.css";

const principles = [
  "• Надежность в поставках",
  "• Индивидуальный подход к каждому клиенту",
  "• Профессиональные, компетентные специалисты",
  "• Конкурентоспособные цены",
  "• Выгодные условия поставки",
  "• Добросовестность, честность в работе",
  "• Гарантия качества",
];

const ourPrinciples = principles.map((x) => {
  return <p className={styles.principles}>{x}</p>;
});

export const AboutUs = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.secondaryContainer}>
          <div className={styles.aboutUs}>
            <p className={styles.paragraphHeading}>О КОМПАНИИ</p>
            <p className={styles.aboutUsParagraph}>
              Компания "РостЭнергоСтрой" является российской электротехнической
              компанией, образованной путем выделения в отдельное предприятие на
              базе компании ООО"Экопромстрой", зарекомендовавшей себя с 2004
              года как надежный поставщик. Руководящий состав и специалисты
              имеют многолетний опыт в производстве и поставках высоковольтного
              оборудования для распределительных сетей от 6 Кв до 35 Кв.
            </p>
            <p className={styles.aboutUsParagraph}>
              Специалисты нашей компании всегда готовы помочь Вам подобрать
              необходимый комплект оборудования и проконсультировать по
              техническим вопросам. Мы производим поставку наших товаров по всей
              территории России в минимально короткие сроки, привлекая
              транспортные компании.
            </p>
          </div>
        </div>
        <div className={styles.secondaryContainer}>
          <div className={styles.ourPrinciples}>
            <p className={styles.paragraphHeading}>ПРИНЦИПЫ НАШЕЙ РАБОТЫ</p>
            <div>{ourPrinciples}</div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.headingBackground}>
          <p className={styles.heading}>
            МЫ ЗАИНТЕРЕСОВАНЫ В ДОЛГОСРОЧНОМ СОТРУДНИЧЕСТВЕ И ВСЕГДА ГОТОВЫ
            ПОМОЧЬ ВАМ С ВЫБОРОМ, ПРЕДЛОЖИТЬ ОПТИМАЛЬНЫЕ ЦЕНЫ И УСЛОВИЯ ПОСТАВКИ
          </p>
        </div>
      </div>
    </>
  );
};
