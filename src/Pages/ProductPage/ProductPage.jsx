import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./productpage.css";
import { Spin } from "antd";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/CartRedux";
import Header from "../../Components/Header/Header";
import { message } from "antd";
const axios = require("axios").default;

const ProductPage = () => {
  const [product, setproduct] = useState([]);
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const [loading, setloading] = useState(true);
  const [quantity, setquantity] = useState(1);
  const dispatch = useDispatch();
  const send_product = {
    product: product,
    product_quantity: quantity,
  };

  useEffect(() => {
    const getproduct = async () => {
      const product = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      );
      setproduct(product.data);
      setloading(false);
    };
    getproduct();
  }, []);
  const changequantity = (value) => {
    if (value === "plus") {
      setquantity(quantity + 1);
    } else {
      setquantity(quantity === 1 ? 1 : quantity - 1);
    }
  };
  const handleclick = () => {
    dispatch(
      addProduct({
        product,
        quantity,
        subtotal: product.price * quantity,
      })
    );
    message.success("Added to Cart successfully", 0.5);
  };

  return loading ? (
    <>
      <Header />
      <div className="spinner">
        <Spin size="large" />
      </div>
    </>
  ) : (
    <>
      <Header />
      <div className="Product-Page">
        <div className="left">
          <div className="main-image">
            <img
              src={product.img}
              alt="Product Image here "
              className="single-product-img"
            />
          </div>
        </div>
        <div className="right">
          <h1 className="product-title">{product.title}</h1>
          <h2 className="product-price">${product.price}</h2>
          <p className="product-description">{product.desc}</p>
          <div className="quantity-and-cart-btn">
            <div className="quantity-selector">
              <span className="quantity-minus" onClick={() => changequantity()}>
                -
              </span>
              <input type="number" min="1" value={quantity} readOnly />
              <span
                className="quantity-plus"
                onClick={() => changequantity("plus")}
              >
                +
              </span>
            </div>
            <button
              className="btn-add-to-cart"
              onClick={() => {
                handleclick();
              }}
            >
              Add to Cart
            </button>
          </div>

          <h5 className="product-category">Category : {product.category}</h5>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
