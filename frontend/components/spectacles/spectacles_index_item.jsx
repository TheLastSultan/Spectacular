import React from 'react';
import spectacleIndexItem from './spectacles_index_item';
import { Link } from 'react-router-dom'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import merge from 'lodash/merge';



class SpectacleIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addedToCart: this.props.spectacle.cart_status
        }
    }


    componentDidMount(){

    }

    addItemToCart(){
        const spectacleId = this.props.spectacle.id
        const item = {spectacleId: `${spectacleId}` }
        this.props.sendCartItem(item).then( () => this.setState({addedToCart: true}))
    }

    removeItemFromCart(){
        const spectacleId = this.props.spectacle.id        
        this.props.removeCartItem(spectacleId).then(this.setState({addedToCart: false}))
    }


    handleCartButton() {

        const likeClass = (this.state.addedToCart) ? 'no-like' : 'like';
    
        const addLikeButton = (
          <button
            className={`icon icon-likes ${likeClass}`}
            onClick={() => this.addItemToCart()}
            >Like</button>
        );
        const removeLikeButton = (
          <button
            className={`icon icon-likes ${likeClass}`}
            onClick={() => this.removeItemFromCart()}
            >Unlike</button>
        );
        return (this.state.addedToCart) ? removeLikeButton : addLikeButton;
    }

    render(){
        const {spectacle} = this.props
        return(
        <li className="spectacle-thumbnail col-md-3">
            <Link to={`/spectacles/${spectacle.id}`} className="spectacle-link">
                <img src={spectacle.image_url} className="spectacle-image" alt={spectacle.title} /> 
                <span className="spectacle-title">{spectacle.title}</span> 
            </Link>
            <div className="heart-icon">
                {this.handleCartButton()}
            </div>   
        </li>) 
    }
    
}; 

export default SpectacleIndexItem;

