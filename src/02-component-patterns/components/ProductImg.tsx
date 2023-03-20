// import styles from "@/02-component-patterns/styles/styles.module.css";
import styles from "@/02-component-patterns/styles/styles.module.css";
import noImg from "@/02-component-patterns/assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductImg = ({ img = "" }) => {
  const {
    product: { imgSrc },
  } = useContext(ProductContext);
  const imgToShow: string = img || imgSrc || noImg;

  return (
    <img src={imgToShow} alt="Product image" className={styles.productImg} />
  );
};
