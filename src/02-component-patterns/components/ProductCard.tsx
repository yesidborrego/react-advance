import styles from "../styles/styles.module.css";
import { IProductCardProps, useProduct } from "@/02-component-patterns";
import { ProductContext } from "../context/ProductContext";

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: IProductCardProps) => {
  const { counter, handleMinus, handleAdd } = useProduct();
  return (
    <Provider value={{ counter, handleMinus, handleAdd, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
