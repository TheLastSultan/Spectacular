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

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
    
    }

    render(){
        // debugger; 
        // // {title: "Chuva de Prata", id: 2, fit: "Narrow", price: 169, material: "Mixed", …}
        const {spectacle} = this.props
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
                <FontAwesomeIcon icon="heart" id={`spectacle-heart-${spectacle.id}`} className="faHeart" />
            </div>
            <div className="price col-md-1">
                <span> </span>
            </div>    
        </li>
        ) 
    }
    
}; 

export default CartIndexItem;