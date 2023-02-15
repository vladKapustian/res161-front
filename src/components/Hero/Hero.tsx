import styles from "./styles.module.css";

export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.container}>
        <h3 className={styles.title}>РостЭнергоСтрой</h3>
        <p className={styles.description}>
          Производство и поставка высоковольтного оборудования
        </p>
      </div>
    </div>
  );
};
