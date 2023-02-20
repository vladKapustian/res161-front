import styles from "./styles.module.css";
import Image from "next/image";
import contactsIcon from "src/assets/images/phoneIcon.png";
import favouritesIcon from "src/assets/images/favouritesIcon.png";
import homeIcon from "src/assets/images/homeIcon.png";
import Link from "next/link";
import { categories } from "src/assets/temporaryData/temporaryData";
import { useState } from "react";
import { AboutUsModal } from "../contactsModal/AboutUs.modal";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export const Navbar = () => {
  const copyTextToClipboard = async () => {
    if ("clipboard" in navigator) {
      alert("text copied to clipboard");
      return await navigator.clipboard.writeText(email);
    } else {
      return document.execCommand("copy", true, email);
    }
  };

  const goodsCategories = categories.slice(0, 5).map((category) => {
    return (
      <Link className={styles.category} href={"#"}>
        {category.name}
      </Link>
    );
  });

  const email = "res161@bk.ru";

  const [modalIsShown, setModalIsShown] = useState(false);

  const [tooltipText, setTooltipText] = useState("Скопировать текст");

  const openModal = () => {
    setModalIsShown(true);
    document.body.style.overflow = "hidden";
    console.log(modalIsShown);
  };

  const closeModal = () => {
    setModalIsShown(false);
    document.body.style.overflow = "unset";
    console.log(modalIsShown);
  };

  return (
    <>
      {modalIsShown && <AboutUsModal closeModal={closeModal} />}
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Link href={"/"} className={styles.title}>
            РостЭнергоСтрой
          </Link>
          <input className={styles.searchBar} type="text" />
          <p
            data-tooltip-id="my-tooltip"
            data-tooltip-content={tooltipText}
            className={styles.email}
            onClick={() => {
              copyTextToClipboard;
              setTooltipText("Текст скопирован");
            }}
          >
            {email}
          </p>
          <Tooltip
            afterHide={() => setTooltipText("Скопировать текст")}
            id="my-tooltip"
          />
          <p onClick={openModal} className={styles.contactInfo}>
            <Image
              className={styles.contactInfoIcon}
              src={contactsIcon}
              alt=""
            ></Image>
            <p className={styles.contactInfoText}>Контакты</p>
          </p>
          <div className={styles.favourites}>
            <Image
              className={styles.favouritesIcon}
              src={favouritesIcon}
              alt=""
            ></Image>
            <p className={styles.favouritesText}>Избранное</p>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarHome}>
            <Link href={"/"} className={styles.homeLink}>
              <Image className={styles.homeIcon} src={homeIcon} alt=""></Image>
              Главная
            </Link>
          </div>
          <Link className={styles.category} href={"/categories"}>
            Категории
          </Link>
          {goodsCategories}
        </div>
      </div>
    </>
  );
};
