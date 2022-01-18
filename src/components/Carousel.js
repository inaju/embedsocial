import React, { useEffect, useState } from 'react'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    
  };
  return (
      <div className="carousel__container">

      
    <Slider className="slider__container" {...settings}>
      <div className="first__carousel">
          <div className="carousel__item">
          <h3>1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde nesciunt dolorem, minima asperiores excepturi in repellendus molestiae harum tenetur!</p>

          </div>

          <div className="carousel__item">
          <h3>1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde nesciunt dolorem, minima asperiores excepturi in repellendus molestiae harum tenetur!</p>

          </div>

          <div className="carousel__item">
          <h3>1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde nesciunt dolorem, minima asperiores excepturi in repellendus molestiae harum tenetur!</p>

          </div>

      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  );
}
