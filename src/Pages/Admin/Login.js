import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Alert } from "antd";
const axios = require("axios").default;

const Login = ({ setusername, setuserimg }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState(null);
  const Onchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const CheckLogin = async () => {
    setloading(true);
    try {
      const user = await axios.post("http://localhost:5000/api/auth/login", {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("auth-token", user.data.authtoken);
      setusername(user.data.user.username);
      setuserimg(user.data.user?.img);
      navigate("/admin-panel", {
        state: {
          username: user.data.user.username,
          email: user.data.user.email,
          userId: user.data.user._id,
        },
      });
    } catch (error) {
      seterror(error);
      seterror(error.response.data);
      setTimeout(() => {
        seterror(null);
      }, 2000);
    }
    setloading(false);
  };

  useEffect(() => {
    if (state?.msg) {
      seterror({ msg: state?.msg });
      setTimeout(() => {
        seterror(null);
      }, 2000);
    }
  }, []);

  return (
    <div className="Login-Page">
      {error && (
        <Alert
          message={error?.msg}
          type="error"
          showIcon
          className="error-message"
          closable
        />
      )}

      <div className="login-container">
        <Link to="/" className="logo">
          <img src="/logo.png" className="h-[70px] w-auto mx-auto" />
          <h1>LOGIN PANEL</h1>
        </Link>

        <form className="login-form">
          <h3 className="font-semibold text-sm">Enter Your Email</h3>
          <input
            className="email"
            type="email"
            required
            onChange={Onchange}
            name="email"
            label="Enter Your Email"
          />
          <h3 className="font-semibold text-sm">Enter Your Password</h3>
          <input
            className="password"
            type="password"
            required
            name="password"
            onChange={Onchange}
            label="Enter Your Password"
          />
          <button
            className="submit"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              CheckLogin();
            }}
          >
            {loading ? (
              <LoadingOutlined style={{ fontSize: 24 }} spin />
            ) : (
              "Submit"
            )}
          </button>
          <Link to="/register" className="register-btn">
            Dont have account? Sign up!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
