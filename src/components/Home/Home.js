import React from "react";
import "./home.scss";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/AugART21_PC_hero_1x_2days-to-go_FDFO._CB645199309_.jpg"
          alt="homepage_banner_image"
          className="home_image"
        />
        <div className="home_row">
          <Product
            title={
              "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            }
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            }
            rating={4}
            price={215.0}
          />
          <Product
            title={
              "Echo (4th Gen) | Premium sound powered by Dolby and Alexa (Black)"
            }
            image={"https://m.media-amazon.com/images/I/61-DjUz7JxL.jpg"}
            rating={5}
            price={7999.0}
          />
        </div>
        <div className="home_row">
          <Product
            title={
              "2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 128GB) - Space Grey (3rd Generation)"
            }
            image={
              "https://m.media-amazon.com/images/I/81a-rN2A3DS._SL1500_.jpg"
            }
            rating={4}
            price={83390.0}
          />
          <Product
            title={
              "Echo Dot (3rd Gen, Black) combo with Fire TV Stick and Wipro 9W LED smart color bulb"
            }
            image={
              "https://m.media-amazon.com/images/I/41lyo5XUo+S._SL1000_.jpg"
            }
            rating={4}
            price={6098.0}
          />
          <Product
            title={"New Apple iPhone 11 (64GB) - (Product) RED"}
            image={
              "https://m.media-amazon.com/images/I/71hh7cpWadL._SL1500_.jpg"
            }
            rating={5}
            price={50999.0}
          />
        </div>
        <div className="home_row">
          <Product
            title={
              "LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
            }
            image={
              "https://m.media-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg"
            }
            rating={4}
            price={39399.0}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
