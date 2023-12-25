import React from "react";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import Productshome from "../../Components/Products-home/Productshome";
import Slider from "../../Components/Slider/Slider";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Categories />
      <Productshome />
        <Footer />
    </div>
  );
};

export default Home;
