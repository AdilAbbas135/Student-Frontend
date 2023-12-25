import React, { useState, useEffect } from "react";
import "./products_admin.css";
import { message } from "antd";
var axios = require("axios").default;

const Products_Admin = ({ page, setpage, setproductId }) => {
  const [allproducts, setallproducts] = useState([]);
  useEffect(() => {
    fetch_products();
  }, []);

  const fetch_products = async () => {
    const products = await axios.get("http://localhost:5000/api/products/");
    //console.log(products.data);
    await setallproducts(products.data);
    // console.log(allproducts);
  };

  const DeleteProduct = async (productid) => {
    try {
      const deleteproduct = await axios.delete(
        `http://localhost:5000/api/products/deleteproduct/${productid}`
      );
      message.success("Product Deleted Successfully");
      fetch_products();
    } catch (error) {
      message.error("Error in Deleting the product");
      console.log(error);
    }
  };

  return (
    <div className="admin-product-page">
      <div className="title-add-btn">
        <h1 className="productname">Products</h1>
        <button
          className="admin-add-product-btn"
          onClick={() => {
            setpage("add-new-product");
          }}
        >
          Add New Product
        </button>
      </div>
      <div className="products-list">
        {allproducts.map((product, index) => (
          <div className="product-list-item" key={product._id}>
            <img src={product.img} className="product-list-item-img" />
            <div className="product-title-desc-container">
              <h1 className="product-list-item-title">{product.title}</h1>
              <p className="product-list-item-desc">
                {product.desc.length > 50
                  ? product.desc.substring(0, 100) + "..."
                  : product.desc}
              </p>
            </div>
            <div className="admin-edit-delete-btns">
              <button
                className="admin-edit-btn"
                onClick={() => {
                  setpage("edit-product");
                  setproductId(product._id);
                }}
              >
                Edit
              </button>
              <button
                className="admin-delete-btn"
                onClick={() => {
                  DeleteProduct(product._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products_Admin;
