import styles from "@/02-component-patterns/styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductTitle = ({ title }: { title?: string }) => {
  const {
    product: { title: titleProduct },
  } = useContext(ProductContext);
  const titleToShow: string = title || titleProduct;
  return <span className={styles.productDescription}>{titleToShow}</span>;
};
