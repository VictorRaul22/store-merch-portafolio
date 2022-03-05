import React, { Suspense, lazy } from "react";
import LoadingImgCard from "./LoadingImgCard";

const ImgCard = lazy(() =>
  import(/* webpackChunkName: "ImgCard" */ "@components/ImgCard")
);
function Product({ product, handleAddToCart }) {
  return (
    <div className="Products-item">
      <Suspense fallback={<LoadingImgCard />}>
        <ImgCard src={product.image} alt={product.title} />
      </Suspense>
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
}

export default Product;
