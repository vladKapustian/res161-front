import styles from "./styles.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { productsPublic } from "src/assets/temporaryData/temporaryData";

export const SalesHits = () => {
  const products = productsPublic.slice(0, 5).map((product) => {
    return <ProductCard product={product} />;
  });
  return (
    <div className={styles.container}>
      <p className={styles.salesHits}>Хиты продаж</p>
      <div className={styles.products}>{products}</div>
    </div>
  );
};
