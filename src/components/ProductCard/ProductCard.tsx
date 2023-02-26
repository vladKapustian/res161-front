import styles from "./styles.module.css";
import Image from "next/image";
import type { IProductPublicList } from "src/assets/temporaryData/temporaryData";
import LikeIcon from "src/assets/svg/LikeIcon";

import MockImage from "src/assets/images/vikluchatel_vk_10.jpg";
import { useState } from "react";

export const ProductCard = ({ product }: { product: IProductPublicList }) => {
  const [isFavourite, setIsFavourite] = useState(false);
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

      <div className={styles.productBottomBar}>
        <p className={styles.name}>{product.name}</p>
        <LikeIcon
          onClick={() => {
            setIsFavourite((prev) => !prev);
            localStorage.setItem;
          }}
          active={isFavourite}
        />
      </div>
    </div>
  );
};
