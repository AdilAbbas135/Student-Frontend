import React, { useState, useRef } from "react";
import "./EditProduct.css";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
var axios = require("axios").default;

const EditProduct = () => {
  const [ProductData, setproductData] = useState({
    title: "",
    desc: "",
    category: ["adil"],
    price: 0,
  });
  const [ProductImage, setProductImage] = useState([]);
  const [loading, setloading] = useState(false);

  const onChange = (e) => {
    setproductData({ ...ProductData, [e.target.name]: e.target.value });
  };

  const UploadProduct = async () => {
    var main_img = document.getElementById("file");
    const data = new FormData();
    data.append("title", ProductData.title);
    data.append("desc", ProductData.desc);
    data.append("price", ProductData.price);
    data.append("file", ProductImage[0]);
    try {
      setloading(true);
      const product = await axios.post(
        "http://localhost:5000/api/products/addproduct",
        data
      );
      console.log(product);
      message.success("Product Added Successfully");
      setloading(false);
      setproductData({
        title: "",
        desc: "",
        category: [],
        price: 0,
      });
      setProductImage([]);
      main_img.value = null;
    } catch (error) {
      message.error("Error in Uploading the Product");
      console.log(error);
      setloading(false);
    }
  };
  return (
    <div className="add-product-page">
      <h1 className="add-product-txt">Add a new Product</h1>
      <form
        className="add-product-form"
        onSubmit={(e) => {
          e.preventDefault();
          UploadProduct();
        }}
        encryp
      >
        <h2>Enter Title</h2>
        <input
          className="add-product-title"
          required
          onChange={onChange}
          name="title"
          value={ProductData.title}
        />
        <h2 className="add-product-desc-txt">Enter Description</h2>
        <textarea
          rows="10"
          className="add-product-desc"
          required
          name="desc"
          onChange={onChange}
          value={ProductData.desc}
        />
        <h2>Price($USD)</h2>
        <input
          type="number"
          className="dd-product-price"
          name="price"
          value={ProductData.price === 0 ? "" : ProductData.price}
          onChange={onChange}
        />
        <h2>Choose Product Image</h2>
        <input
          type="file"
          id="file"
          onChange={(e) => {
            setProductImage([...ProductImage, e.target.files[0]]);
          }}
        />
        <button
          type="submit"
          className="admin-add-product-btn admin-add-product-submit-btn"
        >
          {loading ? (
            <LoadingOutlined style={{ fontSize: 24 }} spin />
          ) : (
            "Add Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
