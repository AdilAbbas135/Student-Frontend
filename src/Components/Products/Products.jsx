import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return products.map((product) => (
    <div className="shop-product-container" key={product._id}>
      <Link to={`/shop/product/${product?._id}`}>
        <div className="shop-image-container">
          <img src={product?.img} className="1st-img" />
        </div>
        <div className="shop-product-detail">
          <h2>{product?.title}</h2>
          <h3>$ {product?.price}</h3>
        </div>
      </Link>
    </div>
  ));
};

export default Products;
