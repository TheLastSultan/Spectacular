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
            <img src="https://c49.pcloud.com/dpZAYU9cpZ1v7rpHZ2OYNZZylyHI7Z3VZZtIZXZ5iFalQMSKGHTHitGQHAO6bdmefjV/th-8583747644-1074x396.png" />
          </div>
          <div>
            <img src="https://c277.pcloud.com/dpZRhU9cpZEv7rpHZ2OYNZZylyHI7Z3VZZtIZXZ8eShTRc9X8b6O0QyfwKMkk6yrXD7/th-8583747661-1066x409.png" />
          </div>
          <div>
            <img src="https://c282.pcloud.com/dpZgSU9cpZzi7rpHZ2OYNZZylyHI7Z3VZZtIZXZ6tWQHxlCv4uB1U03Tuvb5Rtbzw2X/th-8583747686-1064x414.png" />
          </div>
          <div>
            <img src="https://c6.pcloud.com/dpZXSU9cpZei7rpHZ2OYNZZylyHI7Z3VZZtIZXZCA3Ubw3TAtJdYLxLoOb2AFcdvvYk/th-8583747706-1080x406.png" />
          </div>
        </Slider>
      </div>
    );
  }
}