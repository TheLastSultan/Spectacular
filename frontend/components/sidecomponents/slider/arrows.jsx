import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const RightArrow = ( props ) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <FontAwesomeIcon icon="search" className="faSearch "  onClick={props.goToNexSlide}/>
    </div>
  );
}

export const LeftArrow = ( props ) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <FontAwesomeIcon icon="search" className="faSearch arrow"  onClick={props.goToNexSlide}/>
    </div>
  );
}
