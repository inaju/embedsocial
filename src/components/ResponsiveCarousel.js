import React, { Component } from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import popover_preview_story_widget from '../assets/popover_preview_story_widget.png'
import e_commerce_site from '../assets/e_commerce_site.png'
import preview_story_widget_small from '../assets/preview_story_widget_small.png'
// import preview_story_widget_small from '../assets/preview_story_widget_small.png'

import './ResponsiveCarousel.css'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="responsivecarousel__container">
        <h2> Responsive </h2>
        <Slider {...settings}>
            <div className="carousel__item">
                <CarouselCard image={popover_preview_story_widget} title="Popover" text="Showcases on every page that gives the feel of a living & breathing website."/>
            </div>
            <div className="carousel__item">
                <CarouselCard image={e_commerce_site} title="Highlights" text="Mimics the same functionality of the Instagram Highlights on your website."/>
            </div>
            <div className="carousel__item">
                <CarouselCard image={preview_story_widget_small} title="Gallery" text="One widget with multiple stories and embed them as a full story gallery on your website. "/>
            </div>
            <div className="carousel__item">
                <CarouselCard image={popover_preview_story_widget} title="Popover" text="Showcases on every page that gives the feel of a living & breathing website."/>
            </div>
            <div className="carousel__item">
                <CarouselCard image={popover_preview_story_widget} title="Popover" text="Showcases on every page that gives the feel of a living & breathing website."/>
            </div>

        </Slider>
      </div>
    );
  }
}