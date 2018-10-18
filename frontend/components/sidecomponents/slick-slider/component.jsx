import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

export default class ReactSlickDemo extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const { color , description} = this.props

    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img className="img-slider" slidersrc={"https://storage.googleapis.com/spec-tacular/"+description+"/"+ color+"/1.jpg"} />
          </div>
          <div>
            <img className="img-slider" src={"https://storage.googleapis.com/spec-tacular/"+description+"/"+ color+"/2.jpg"} />
          </div>
          <div>
            <img className="img-slider" src={"https://storage.googleapis.com/spec-tacular/"+description+"/"+ color+"/3.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}