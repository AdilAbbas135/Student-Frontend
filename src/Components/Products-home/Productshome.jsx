import React, { useState } from "react";
import "./productshome.css";

const Productshome = () => {
  const [image, setimg] = useState(true);
  const [animeclass, setanimeclass] = useState("");
  const products = [
    {
      id: "1",
      name: "Wooden single drawer",
      desc: "Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur.",
      category: "Furniture",
      main_img: "./assets/product-furniture-4-2.jpg",
      gallery_img: "./assets/product-furniture-4-3.jpg",
      normal_price: "$249",
      sale_price: "$150",
    },
    {
      id: "2",
      name: "Smart watches wood edition",
      desc: "Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus.",
      category: "Accessories",
      main_img: "./assets/product-accessories-8.jpg",
      gallery_img: "./assets/product-accessories-8-1.jpg",
      normal_price: "$599",
    },
    {
      id: "3",
      name: "Panton tunior chair",
      desc: "Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum.",
      category: "Furniture",
      main_img: "./assets/product-furniture-19-3.jpg",
      gallery_img: "./assets/product-furniture-19.jpg",
      normal_price: "$199",
    },
    {
      id: "4",
      name: "Decoration wooden present",
      desc: "Nam gravida vulputate est venenatis eu at ullamcorper consectetur parturient suspendisse a elit lobortis ut convallis vestibulum vulputate nunc praesent mattis sem faucibus risus sociosqu.Dapibus curae a ac vestibulum a magnis ullamcorper orci a iaculis adipiscing augue a massa a torquent feugiat a.Scelerisque vestibulum.",
      category: "Accessories",
      main_img: "./assets/product-accessories-10.jpg",
      gallery_img: "./assets/product-accessories-10-2.jpg",
      normal_price: "$89",
    },

    {
      id: "5",
      name: "Wooden single drawer",
      desc: "Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur.",
      category: "Furniture",
      main_img: "./assets/product-furniture-4-2.jpg",
      gallery_img: "./assets/product-furniture-4-3.jpg",
      normal_price: "$249",
      sale_price: "$150",
    },
    {
      id: "6",
      name: "Smart watches wood edition",
      desc: "Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus.",
      category: "Accessories",
      main_img: "./assets/product-accessories-8.jpg",
      gallery_img: "./assets/product-accessories-8-1.jpg",
      normal_price: "$599",
    },
    {
      id: "7",
      name: "Panton tunior chair",
      desc: "Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum.",
      category: "Furniture",
      main_img: "./assets/product-furniture-19-3.jpg",
      gallery_img: "./assets/product-furniture-19.jpg",
      normal_price: "$199",
    },
    {
      id: "8",
      name: "Decoration wooden present",
      desc: "Nam gravida vulputate est venenatis eu at ullamcorper consectetur parturient suspendisse a elit lobortis ut convallis vestibulum vulputate nunc praesent mattis sem faucibus risus sociosqu.Dapibus curae a ac vestibulum a magnis ullamcorper orci a iaculis adipiscing augue a massa a torquent feugiat a.Scelerisque vestibulum.",
      category: "Accessories",
      main_img: "./assets/product-accessories-10.jpg",
      gallery_img: "./assets/product-accessories-10-2.jpg",
      normal_price: "$89",
    },
  ];

  return (
    <div className="Products-home">
      <h1>Featured Products</h1>
      <h4>We Provide many collections to our users</h4>
      <div className="products">
        {products.map((product) => (
          <div className="product-container" key={product.id}>
            <div className="product-container2">
              <div className="image-container">
                <img src={product.main_img} className="1st-img" />
              </div>
              <div className="product-detail">
                <h2>{product.name}</h2>
                <h4>{product.category}</h4>
                <h3>{product.normal_price}</h3>
                <div className="more-detail">
                  {/* <h5>
                    {product.desc.length > 100
                      ? product.desc.substring(0, 100) + "..."
                      : product.desc}
                  </h5> */}
                  {/* <button className="product-detail-btn">View</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productshome;
