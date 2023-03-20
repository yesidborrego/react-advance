import { FC } from "react";
import {
  ProductCard,
  ProductButtons,
  ProductImg,
  ProductTitle,
} from "@/02-component-patterns";

const product = {
  id: 1,
  title: "Coffee Mug - Proof",
  imgSrc: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Developer glass" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImg />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
