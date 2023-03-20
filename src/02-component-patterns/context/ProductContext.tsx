import { createContext } from "react";
import { IProductContext } from "../interfaces/products.interface";

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);
