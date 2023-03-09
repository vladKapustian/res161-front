import { productsPublic } from "src/assets/temporaryData/temporaryData";
import { IProductFull } from "src/assets/temporaryData/temporaryData";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

type Props = {
  id: number;
};

const ProductPage = ({}: Props) => {
  return <div></div>;
};

export default ProductPage;

// export const getServerSideProps: GetServerSideProps<Props> = async (
//   context
// ) => {
//   return {
//     props: {
//       slug:
//     },
//   };
// };
