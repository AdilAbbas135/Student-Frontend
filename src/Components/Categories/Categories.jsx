import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";
// import { categories } from "./categories-data";

const Categories = () => {
  const categories = [
    {
      id: "1",
      Title: "Clocks",
      ProductsCount: "12 Products",
      img: "./assets/cat-klock-430x430.jpg",
    },
    {
      id: "2",
      Title: "Accessories",
      ProductsCount: "12 Products",
      img: "./assets/cat-clock-3-430x430.jpg",
    },
    {
      id: "3",
      Title: "Lightning",
      ProductsCount: "17 Products",
      img: "./assets/light-cat-5-430x430.jpg",
    },
    {
      id: "4",
      Title: "Toys",
      ProductsCount: "20 Products",
      img: "./assets/Toys-cat-1-430x430.jpg",
    },
  ];

  return (
    <div className="categories-section">
      <h1>Featured Collections</h1>
      <h4>We Provide many collections to our users</h4>
      <div className="categories">
        <div className="left-section">
          <Link to="/shop/Furniture">
            <img src="./assets/cat-23-860x860.jpg" className="category-img" />
            <div className="caption">
              <h1>Furniture</h1>
              <h4>129 Products</h4>
            </div>
          </Link>
        </div>
        <div className="right-section">
          {categories.map((item) => (
            <div className="coloumn" key={item.id}>
              <img src={item.img} className="right-sec-img" />
              <div className="caption">
                <h1>{item.Title}</h1>
                <h4>{item.ProductsCount}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
