import { GetServerSideProps } from "next/types";
import { productsPublic } from "src/assets/temporaryData/temporaryData";
import { IProductPublicList } from "src/assets/temporaryData/temporaryData";
import { ProductCard } from "src/components";
import slug from "./slug.module.css";

export const CategoryPage = () => {
  const products = productsPublic.map((product: IProductPublicList) => {
    return <ProductCard product={product}></ProductCard>;
  });

  return (
    <div className={slug.container}>
      <p className={slug.title}>Товары в категории </p>
      <div className={slug.products}>{products}</div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (props) => {
//   return {
//     props: {
//       slug: {},
//     },
//   };
// };

export default CategoryPage;
