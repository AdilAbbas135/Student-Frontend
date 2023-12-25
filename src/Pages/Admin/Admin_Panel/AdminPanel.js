import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  ShoppingOutlined,
  WalletOutlined,
  LogoutOutlined,
  PlusSquareOutlined,
  UserOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";
import "./adminpanel.css";
import Products_Admin from "../Products_Page/Products_Admin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddProduct from "../Add new Product/AddProduct";
import CategoriesPage from "../Categories/CategoriesPage";
import EditProduct from "../Edit Product/EditProduct";
import jwtDecode from "jwt-decode";
import axios from "axios";
const AdminPanel = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState("products");
  const [productId, setproductId] = useState();
  const [user, setuser] = useState();

  const fetchuser = async (userId) => {
    const user = await axios.get(
      `http://localhost:5000/api/user/getuser/${userId}`
    );
    if (user?.data?.error) {
      return navigate("/admin", {
        state: { msg: "User Not Found Please Try Again" },
      });
    } else if (user?.data?.success) {
      return setuser(user.data.user), setloading(false);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded?.userId) {
        fetchuser(decoded?.userId);
      } else {
        navigate("/admin", { state: { msg: "Please Login First" } });
      }
    } else {
      navigate("/admin", { state: { msg: "Please Login First" } });
    }
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  return (
    <>
      {loading ? (
        <div className="loading-class">
          <Spin indicator={antIcon} />
          <h1>Loading.....</h1>
        </div>
      ) : (
        <div className="admin-dashboard">
          <div className="admin-panel-left">
            <div className="admin-panel-left-wrapper">
              <div className="admin-profile">
                <img src="./logo.png" className="admin-profile-pc" />
                <h1>{user?.username}</h1>
                <h6>{user?.email}</h6>
              </div>
              <hr className="admin-divider" />
              <ul>
                <li
                  className="admin-panel-menu-item"
                  onClick={() => {
                    setpage("products");
                  }}
                >
                  <HomeOutlined className="admin-panel-menu-icon" />
                  <h2>Dashboard</h2>
                </li>
                <li
                  className="admin-panel-menu-item"
                  onClick={() => {
                    setpage("products");
                  }}
                >
                  <ShoppingOutlined className="admin-panel-menu-icon" />
                  <h2>Products</h2>
                </li>
                <li className="admin-panel-menu-item">
                  <WalletOutlined className="admin-panel-menu-icon" />
                  <h2>Orders</h2>
                </li>
                <li
                  className="admin-panel-menu-item"
                  onClick={() => {
                    setpage("add-new-product");
                  }}
                >
                  <PlusSquareOutlined className="admin-panel-menu-icon" />
                  <h2>Add new Product</h2>
                </li>
                <li className="admin-panel-menu-item">
                  <LogoutOutlined className="admin-panel-menu-icon" />
                  <h2>Logout</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-panel-right">
            {page === "products" && (
              <Products_Admin
                page={page}
                setpage={setpage}
                setproductId={setproductId}
              />
            )}
            {page === "add-new-product" && <AddProduct />}
            {page === "categories" && <CategoriesPage />}
            {page === "edit-product" && <EditProduct productId={productId} />}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
