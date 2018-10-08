import React, { Component } from 'react';
import slide from './slide';
import {leftArrow, rightArrow} from './arrows'

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {

  }

  render() {
    return (
      <div className="slider">
				<Slide/>
        <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
        <RightArrow goToNextSlide={this.goToNextSlide}   />
      </div>
    );
  }
}
