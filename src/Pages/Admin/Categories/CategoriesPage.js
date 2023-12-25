import React, { useEffect } from "react";
import "./categorypage.css";

const CategoriesPage = () => {
  useEffect(() => {}, []);

  return (
    <div className="Category_Page">
      <div className="Category_Page_Wrapper">
        <h1 className="page-main-heading">Categories</h1>
        <div className="cp-coloumns">
          <div className="add-category-form">
            <h2>Category Name: </h2>
            <input className="add-category-title" required name="category" />
            <button className="admin-add-product-btn admin-add-product-submit-btn add-category-btn">
              Add Category
            </button>
          </div>
          <div className="cp-coloumns-right">
            <h1 className="page-main-heading-1">Your Categories</h1>
            <div className="add-category-form"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
