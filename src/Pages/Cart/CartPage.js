import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import "./cartpage.css";
import {
  ArrowRightOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Link, useNavigate } from "react-router-dom";
import deleteProduct from "../../Redux/CartRedux";
const axios = require("axios").default;

const CartPage = () => {
  const stripeKey =
    "pk_test_51JGojQHB8vwABSSpHM2xByAZIfXbe0OIFVUmcrexiKkJmzHZAAj8457O7BuGXCiNkzQWWKpWsUiLQJj6ZTDXIpCS00RsoWj3HG";
  const [StripeToken, setStripeToken] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    try {
      const Checkout = async () => {
        const response = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: StripeToken?.id,
            amount: cart.total * 100,
          }
        );
        console.log(response);
      };
      StripeToken && Checkout();
    } catch (error) {
      console.log(error);
    }
  }, [StripeToken]);

  const RemoveProduct = (index) => {
    dispatch(deleteProduct({ index }));
  };

  return cart.cart_quantity === 0 ? (
    <>
      <Header />
      <div className="empty-cart-page">
        <div className="empty-cart-msg">
          <ShoppingCartOutlined className="cart-icon" />
          <h1>Your Cart is Empty</h1>
        </div>
        <Link to="/shop">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    </>
  ) : (
    <>
      <Header />
      <div className="cart-page">
        <div className="cart-page-banner">
          <span className="overlay"></span>
          <div className="banner-txt">
            <h1>Shopping Cart</h1>
            <span>
              <ArrowRightOutlined className="arrow" />
            </span>
            <h1>Checkout</h1>
            <span>
              <ArrowRightOutlined className="arrow" />
            </span>
            <h1>Order Complete</h1>
          </div>
        </div>

        <div className="cart-page-section1">
          <div className="cart-page-section1-left">
            <table>
              <thead>
                <tr>
                  <th className="product-remove"></th>
                  <th className="product-thumbnail"></th>
                  <th className="product-name">PRODUCT</th>
                  <th className="product-price">PRICE</th>
                  <th className="product-quantity">QUANTITY</th>
                  <th className="product-subtotal">SUBTOTAL</th>
                </tr>
              </thead>

              <tbody>
                {cart.products.map((product, index) => (
                  <tr key={product.product_detail._id}>
                    <th
                      className="product-remove"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        RemoveProduct(index);
                      }}
                    >
                      <CloseOutlined
                        className="remove-product"
                        style={{ cursor: "pointer" }}
                      />
                    </th>
                    <th className="product-thumbnail">
                      <img
                        className="product-img"
                        src={product.product_detail.img}
                        alt="product-image-here"
                      />
                    </th>
                    <th className="product-name">
                      {product.product_detail.title}
                    </th>
                    <th className="product-price">
                      ${product.product_detail.price}
                    </th>
                    <th className="product-quantity">
                      {product.product_quantity}
                    </th>
                    <th className="product-subtotal">
                      ${product.product_subtotal}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-page-section1-right">
            <h1 className="txt1">CART TOTALS</h1>
            <div className="subtotal1">
              <h3>Subtotal</h3>
              <p>${cart.total}</p>
            </div>
            <hr className="spacer1" />
            <div className="total-bill">
              <h1>Total</h1>
              <h1 className="bill-amount">${cart.total}</h1>
            </div>
            <StripeCheckout
              name="Woodmart Clone"
              image="./assets/product-accessories-10.jpg"
              billingAddress
              shippingAddress
              description={`Your Total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={stripeKey}
            >
              <button className="checkout-btn">Proceed to Checkout</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
