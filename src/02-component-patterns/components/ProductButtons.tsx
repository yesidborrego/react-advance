import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductButtons = () => {
  const { counter, handleMinus, handleAdd } = useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={handleMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => handleAdd(1)}>
        +
      </button>
    </div>
  );
};
