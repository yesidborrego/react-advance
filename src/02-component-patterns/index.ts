import { IProductCardHOCProps } from "./interfaces/products.interface";
import { ProductCard as ProductCardHOC } from "./components/ProductCard";
import { ProductButtons } from "./components/ProductButtons";
import { ProductImg } from "./components/ProductImg";
import { ProductTitle } from "./components/ProductTitle";

export const ProductCard: IProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImg,
  Buttons: ProductButtons,
});

export * from "./interfaces/products.interface";
export * from "./hooks/useProduct";
export default ProductCard;
export * from "./context/ProductContext";
export * from "./components/ProductButtons";
export * from "./components/ProductImg";
export * from "./components/ProductTitle";
export * from "./pages/ShoppingPage";
