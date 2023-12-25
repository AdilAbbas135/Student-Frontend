import React, { useEffect, useState } from "react";
import "./Shop_Page.css";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";
import Filter_Sidebar from "../../Components/Sidebar-Filters/Filter_Sidebar";
import Products from "../../Components/Products/Products";
import Header from "../../Components/Header/Header";
const axios = require("axios").default;

const Shop_Page = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [filters, setfilters] = useState(null);
  useEffect(() => {
    const products = async () => {
      const productslist = await axios.get(
        category
          ? `http://localhost:5000/api/products?category=${category}`
          : "http://localhost:5000/api/products"
      );
      const products = productslist?.data;
      setproducts(products);
      setloading(false);
    };
    products();
  }, []);

  return (
    <>
      <Header />
      <div className="shop-Page">
        <div className="Shop-Page-Banner">
          <h1>SHOP</h1>
        </div>
        <div className="all-products">
          <div className="left-section">
            <Filter_Sidebar />
          </div>
          <div className="right-section">
            {loading ? (
              <Spin
                size="large"
                className="spinner"
                style={{ textAlign: "center" }}
              />
            ) : (
              <div className="shop-products">
                <Products products={products} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop_Page;
