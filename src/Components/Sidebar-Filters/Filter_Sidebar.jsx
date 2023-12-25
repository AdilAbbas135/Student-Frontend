import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

const Filter_Sidebar = () => {
  return (
    <div className="filters">
      <div className="category-filter size-filter">
        <h1>FILTER BY Categories</h1>
        <Checkbox className="check-box">Accessories</Checkbox>
        <Checkbox className="check-box">Furniture</Checkbox>
      </div>
      <hr className="divider" />
      <div className="color-filter">
        <h1>FILTER BY COLOR</h1>
        <div className="filter-options">
          <div className="item">
            <div className="item-left-section">
              <span
                className="color-container"
                style={{ backgroundColor: "black" }}
              >
                <CheckOutlined className="tick-badge" />
              </span>
              <h3>Black</h3>
            </div>
            <div className="item-right-section">13</div>
          </div>

          <div className="item">
            <div className="item-left-section">
              <span
                className="color-container"
                style={{ backgroundColor: "blue" }}
              >
                <CheckOutlined className="tick-badge" />
              </span>
              <h3>Blue</h3>
            </div>
            <div className="item-right-section">10</div>
          </div>

          <div className="item">
            <div className="item-left-section">
              <span
                className="color-container"
                style={{ backgroundColor: "brown" }}
              >
                <CheckOutlined className="tick-badge" />
              </span>
              <h3>Brown</h3>
            </div>
            <div className="item-right-section">19</div>
          </div>

          <div className="item">
            <div className="item-left-section">
              <span
                className="color-container"
                style={{ backgroundColor: "gray" }}
              >
                <CheckOutlined className="tick-badge" />
              </span>
              <h3>Grey</h3>
            </div>
            <div className="item-right-section">19</div>
          </div>

          <div className="item">
            <div className="item-left-section">
              <span
                className="color-container"
                style={{ backgroundColor: "green" }}
              >
                <CheckOutlined className="tick-badge" />
              </span>
              <h3>Green</h3>
            </div>
            <div className="item-right-section">19</div>
          </div>

          <div className="item">
            <div className="item-left-section">
              <span
                className="color-container"
                style={{ backgroundColor: "Yellow" }}
              >
                <CheckOutlined className="tick-badge" />
              </span>
              <h3>Yellow</h3>
            </div>
            <div className="item-right-section">19</div>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="category-filter size-filter">
        <h1>FILTER BY Sizes</h1>
        <Checkbox className="check-box">Size 1</Checkbox>
        <Checkbox className="check-box">Size 2</Checkbox>
        <Checkbox className="check-box">Size 3</Checkbox>
        <Checkbox className="check-box">Size 4</Checkbox>
        <Checkbox className="check-box">Size 5</Checkbox>
      </div>
    </div>
  );
};

export default Filter_Sidebar;
