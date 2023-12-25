import React, { useState } from "react";
import "./slider.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Slider = () => {
  const [slide, setslide] = useState(0);
  // const [slideimg, setslideimg] = useState("./assets/slider-main-demo-1.jpg");
  const [move_slideimg, setmove_slideimg] = useState();

  const handleClick = (click) => {
    if (click === "left") {
      slide > 0 ? setslide(slide - 1) : setslide(2);
    } else {
      slide < 2 ? setslide(slide + 1) : setslide(0);
    }
  };
  return (
    <div className="slider">
      <div className="slider-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${slide * 100}vw)` }}
        >
          <div className={`slide slide1 ${slide === 0 ? "active" : ""}`}>
            <div className="slide-left-part">
              <h1>Indoor Plants </h1>
              <p>
                Transform your living space with our diverse indoor plant
                selection. From air-purifying snake plants to the graceful
                beauty of peace lilies, our curated collection adds a touch of
                nature to your home, promoting both aesthetics and well-being.
              </p>
              <h3>$199.90</h3>
            </div>
            <div className="slide-right-part">
              <img
                src={"/assets/indoor plants.png"}
                alt="product-image"
                className=""
              />
            </div>
          </div>
          <div className={`slide slide2 ${slide === 1 ? "active" : ""}`}>
            <div className="slide-left-part">
              <h1>Eamase-Side Chairs</h1>
              <p>
                Himenaeos parturient nam a justo placerat lorem erat pretium a
                fusce pharetra pretium enim sagittis ut nunc neque torquent sem
                a leo. Dictumst himenaeos primis torquent ridiculus.
              </p>

              <h3>$199.90</h3>
            </div>
            <div className="slide-right-part">
              <img src="./assets/Home decor.png" alt="product-image" />
            </div>
          </div>
          <div className={`slide slide3 ${slide === 2 ? "active" : ""}`}>
            <div className="slide-left-part">
              <h1>Wooden Lounge Chairs</h1>
              <p>
                Himenaeos parturient nam a justo placerat lorem erat pretium a
                fusce pharetra pretium enim sagittis ut nunc neque torquent sem
                a leo. Dictumst himenaeos primis torquent ridiculus.
              </p>
              <h3>$199.90</h3>
            </div>
            <div className="slide-right-part">
              <img src="./assets/seeds.png" alt="product-image" />
            </div>
          </div>
        </div>

        <div
          className="arrow-left"
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowLeftOutlined className="arrow-left-icon" />
        </div>
        <div
          className="arrow-right"
          onClick={() => {
            handleClick();
          }}
        >
          <ArrowRightOutlined className="arrow-right-icon" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
