import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

export default class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="https://storage.googleapis.com/spec-tacular/felix-3.png" />
          </div>
          <div>
            <img src="https://storage.googleapis.com/spec-tacular/felix-1.png" />
          </div>
          <div>
            <img src="https://storage.googleapis.com/spec-tacular/felix-2.png" />
          </div>
          <div>
            <img src="https://storage.googleapis.com/spec-tacular/felix-4.png" />
          </div>
        </Slider>
      </div>
    );
  }
}