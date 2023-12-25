import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="Login-Page">
      {/* {error && (
        <Alert
          message={error?.msg}
          type="error"
          showIcon
          className="error-message"
          closable
        />
      )} */}

      <div className="login-container">
        <Link to="/" className="logo">
          <h1>Registration Panel</h1>
        </Link>

        <form className="login-form">
          <input
            className="email"
            type="email"
            placeholder="Enter Your Email"
            required
            // onChange={Onchange}
            name="email"
          />
          <input
            className="password"
            placeholder="Enter Your Password"
            type="password"
            required
            name="password"
            // onChange={Onchange}
          />
          <button
            className="submit"
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   CheckLogin();
            // }}
          >
            {/* {loading ? (
              <LoadingOutlined style={{ fontSize: 24 }} spin />
            ) : ( */}
            "Register"
            {/* )} */}
          </button>
          <Link to="/admin" className="register-btn">
            Already have account? Login!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
