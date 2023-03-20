import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleMinus = () => {
    if (counter >= 1) setCounter((counter) => counter - 1);
  };
  const handleAdd = (value: number) => {
    setCounter((counter) => counter + value);
  };

  return { counter, handleMinus, handleAdd };
};
