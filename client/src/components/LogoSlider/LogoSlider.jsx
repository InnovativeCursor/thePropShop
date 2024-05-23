import React from "react";
import "./LogoSlider.css";
import Slider from 'react-infinite-logo-slider'

const slider1 =
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/Adidas.png";
const slider2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5EC2bXn9G_NyiND5CN3Bd7VZQssGBYnuTegBJO99sQ&s";
const slider3 =
  "https://thumbs.dreamstime.com/b/bmw-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-bmw-logo-editorial-illustrative-white-208329177.jpg";
const slider4 =
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220513_2022-05-13-140159_bnyw.png?crop=1:1,smart&width=150&dpr=2";
const LogoSlider = () => {
  return (
    <div>
      <div className="main-slider">
        
        <div className="slider-logo">
          <Slider
            // width="300px"
            duration={30}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={"#fff"}
            style={{ gap: "3rem", margin: "50px" }}
          >
            {[slider1, slider2, slider3, slider4,].map((item) => (
              <Slider.Slide key={item}>
                <div className="slider">
                  <img src={item} alt="" />
                </div>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
