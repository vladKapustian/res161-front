import { ICategory } from "src/assets/temporaryData/temporaryData";
import { categories } from "src/assets/temporaryData/temporaryData";
import { CategoryCard } from "src/components";
import styles from "./styles.module.css";

const CategoriesPage = () => {
  const categoriesList = categories.map((category) => {
    return <CategoryCard key={category.id} category={category}></CategoryCard>;
  });

  return (
    <div className={styles.container}>
      <p className={styles.salesHits}>Категории</p>
      <div className={styles.products}>{categoriesList}</div>
    </div>
  );
};

export default CategoriesPage;
