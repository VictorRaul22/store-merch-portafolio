import React, { useContext } from "react";
import Product from "@components/Product";
import "@styles/components/Products.css";
import Appcontext from "../context/AppContext";

function Products() {
  const { state, addToCart } = useContext(Appcontext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
