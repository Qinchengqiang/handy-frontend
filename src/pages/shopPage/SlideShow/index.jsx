import React, { Component } from "react";
import "./SlideShow.scss";
// import { Carousel } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default class SlideShow extends Component {
  render() {
    return (
      <div className="slideshow"> 
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay className="carousel">
          <div>
            <img src="https://cdn.shopify.com/s/files/1/2531/4912/files/home_a_reduced.png?108650776476211002" alt=""/>
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/2531/4912/files/nightstand_reduced.png?15995594533464473842" alt=""/>
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/2531/4912/files/patio_reduced.png?15995594533464473842" alt=""/>
          </div>
        </Carousel>
        ,
      </div>
    );
  }
}
