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
        const {spectacle} = this.props
        return(
        <li className="spectacle-thumbnail col-md-3">
            <Link to={`/spectacles/${spectacle.id}`} className="spectacle-link">
                <img src={spectacle.image_url} className="spectacle-image" alt={spectacle.title} /> 
                <span className="spectacle-title">{spectacle.title}</span> 
            </Link>
            <div className="heart-icon">
                <FontAwesomeIcon icon="heart" id={`spectacle-heart-${spectacle.id}`} className="faHeart" />
            </div>   
        </li>
        ) 
    }
    
}; 

export default CartIndexItem;