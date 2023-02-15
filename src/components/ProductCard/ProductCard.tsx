import styles from "./styles.module.css";
import Image from "next/image";
import type { IProductPublicList } from "src/assets/temporaryData/temporaryData";

import MockImage from "src/assets/images/vikluchatel_vk_10.jpg";

/** принимает 1 товар и возвращает карточку с товаром */
export const ProductCard = ({ product }: { product: IProductPublicList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          width={product.images.medium.width}
          height={product.images.medium.height}
          src={MockImage}
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt=""
          className={styles.image}
        ></Image>
      </div>
      <p className={styles.name}>{product.name}</p>
    </div>
  );
};
