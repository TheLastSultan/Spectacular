import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

export default class ReactSlickDemo extends React.Component {
  
  constructor(props){
    super(props);
  }
  

  componentDidMount(){
    
  }


  render() {
    
    var settings = {
      dots: false,
      speed: 500,
    };

    const { color , description} = this.props

    const image1 = "https://storage.googleapis.com/spec-tacular/"+description+"/"+ color+"/1.jpg"
    const image2 = "https://storage.googleapis.com/spec-tacular/"+description+"/"+ color+"/2.jpg"

    return (
      <div className="container">
        <Slider {...settings}>
          <div className="imageSliderHolder">
            <img className="img-slider" src={image1} />
          </div>
          <div className="imageSliderHolder">
            <img className="img-slider" src={image2} />
          </div>
          <div className="imageSliderHolder">
            <img className="img-slider" src={"https://storage.googleapis.com/spec-tacular/"+description+"/"+ color+"/3.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}