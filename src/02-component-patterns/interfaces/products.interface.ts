import { ReactElement } from "react";

export interface IProductCardProps {
  children?: ReactElement | ReactElement[];
  product: IProducts;
}

interface IProducts {
  id: number;
  imgSrc?: string;
  title: string;
}

export interface IProductContext {
  counter: number;
  handleMinus: () => void;
  handleAdd: (value: number) => void;
  product: IProducts;
}

export interface IProductProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface IProductCardHOCProps {
  ({ children, product }: IProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
