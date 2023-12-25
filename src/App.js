import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shop_Page from "./Pages/Shop Page/Shop_Page";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartPage from "./Pages/Cart/CartPage";
import Login from "./Pages/Admin/Login";
import SignUp from "./Pages/Admin/SignUp";
import AdminPanel from "./Pages/Admin/Admin_Panel/AdminPanel";
import Products_Admin from "./Pages/Admin/Products_Page/Products_Admin";
import { useState } from "react";
import AddProduct from "./Pages/Admin/Add new Product/AddProduct";

function App() {
  const [username, setusername] = useState();
  const [userimg, setuserimg] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop_Page />} />
        <Route exact path="/shop/:category" element={<Shop_Page />} />
        <Route exact path="/shop/product/:id" element={<ProductPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route
          exact
          path="/admin"
          element={<Login setusername={setusername} setuserimg={setuserimg} />}
        />
        <Route exact path="/register" element={<SignUp />} />
        <Route
          exact
          path="/admin-panel"
          element={<AdminPanel username={username} userimg={userimg} />}
        />
        <Route exact path="/admin-panel/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
