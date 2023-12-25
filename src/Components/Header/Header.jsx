import React, { useState } from "react";
import "./header.css";
import { Menu, Select, Badge } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const quantity = useSelector((state) => state.cart.cart_quantity);

  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-left">
          <div className="">
            <Link to="/">
              <img src="/logo.png" className="h-[70px] w-auto" />
            </Link>
          </div>
        </div>
        <div className="header-top-center">
          <div className="search">
            <input type="text" placeholder="Search for Products" />
            <Select
              className="select-category"
              placeholder="Select Category"
              bordered={false}
            >
              <Select.Option value="lucy">kITCHEN</Select.Option>
            </Select>
            <SearchOutlined className="search-icon" />
          </div>
        </div>
        <div className="header-top-right">
          <Link to="/admin"> LOGIN / REGISTER</Link>
          <HeartOutlined className="header-top-right-icons" />
          <Link to="/cart">
            <div className="cart">
              <ShoppingCartOutlined className="header-top-right-icons cart-icon" />
              <span className="cart-counter">{quantity}</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header-bottom">
        <ul className="menu">
          <Link to="/">
            <li className="menu-item">Home</li>
          </Link>
          <Link to="/shop">
            <li className="menu-item">Shop</li>
          </Link>

          <li className="menu-item">About</li>
          <li className="menu-item">Pages</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
