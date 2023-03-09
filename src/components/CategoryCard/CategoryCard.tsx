import styles from "./styles.module.css";
import Image from "next/image";
import type { ICategory } from "src/assets/temporaryData/temporaryData";
import MockImage from "src/assets/images/vikluchatel_vk_10.jpg";
import Link from "next/link";

export const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <Link
      href={`/categories/${encodeURIComponent(category.slug)}`}
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <Image
          width={category.images.medium.width}
          height={category.images.medium.height}
          src={MockImage}
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt=""
          className={styles.image}
        ></Image>
      </div>

      <p className={styles.name}>{category.name}</p>
    </Link>
  );
};
