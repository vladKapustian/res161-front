import styles from "./styles.module.css";

type Props = {
  onClick: () => void;
  active: boolean;
};

const LikeIcon = ({ active, onClick }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke={active ? "red" : "#002033"}
      fill={active ? "red" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={active ? styles.active : styles.inactive}
      onClick={onClick}
    >
      <path
        d="M10.9341 20.1455L10.9331 20.1446C8.12838 17.6013 5.8613 15.5438 4.28635 13.6183C2.72002 11.7033 1.91675 10.0104 1.91675 8.20931C1.91675 5.28686 4.20263 3.00098 7.12508 3.00098C8.78299 3.00098 10.3859 3.77643 11.4291 5.0014L12.0001 5.67195L12.5711 5.0014C13.6142 3.77643 15.2172 3.00098 16.8751 3.00098C19.7975 3.00098 22.0834 5.28686 22.0834 8.20931C22.0834 10.0105 21.2801 11.7034 19.7137 13.6199C18.139 15.5464 15.8726 17.606 13.0688 20.1539L13.0681 20.1545L13.0665 20.1559L12.8432 20.3577C12.3659 20.7889 11.6393 20.7875 11.1637 20.3545L10.9341 20.1455Z"
        stroke-width="1.5"
      ></path>
    </svg>
  );
};

export default LikeIcon;
