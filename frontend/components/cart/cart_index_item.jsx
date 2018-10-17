import React from 'react';
import { Link } from 'react-router-dom'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import merge from 'lodash/merge';



class CartIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addedToCart: false 
        }

    }

    handleClick(itemId){ 
        this.props.deleteCartItem(itemId);
    
    }

    render(){
        const {spectacle} = this.props
        const itemId = spectacle.id
        return(
        <li className="cart-thumbnail col-md-8">
            <div classname="photo-aside col-md-3">
                <Link to={`/spectacles/${spectacle.id}`} className="spectacle-link">
                    <img src={spectacle.image_url} className="spectacle-image" alt={spectacle.title} />  
                </Link>
            </div> 
            <div className="cart-information col-md-3">
                <span className="spectacle-title"> {spectacle.title}</span>
                <span className="spectacle-color"> {spectacle.fit} </span>
                <span className="single-vision"> ${spectacle.price}.00 </span> 
                <span> </span>
            </div> 
            <div className="remove-icon col-md-1">
                <FontAwesomeIcon icon="times"  
                onClick={() => this.handleClick(itemId)} 
                className="faTimes" />
            </div>
            <div className="price col-md-1">
                <span> </span>
            </div>    
        </li>
  
        ) 
    }
    
}; 

export default CartIndexItem;


