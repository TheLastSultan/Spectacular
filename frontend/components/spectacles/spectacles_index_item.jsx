import React from 'react';
import spectacleIndexItem from './spectacles_index_item';
import { Link } from 'react-router-dom'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import merge from 'lodash/merge';



class SpectacleIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addedToCart: this.props.spectacle.cart_status,
            imageUrl: this.props.spectacle.image_url 
        }

        this.onSelectedColor = this.onSelectedColor.bind(this);
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
        const heartLogo = (this.state.addedToCart) ? 'fa-heart' : 'fa-heart-o'
    
        const addLikeButton = (
            <button
                className={`icon icon-likes ${likeClass}`}
                onClick={() => this.addItemToCart()}>
                <i class={`fa ${heartLogo} fa1`} aria-hidden="true"></i>
            </button>
        );
        const removeLikeButton = (
          <button
            className={`icon icon-likes ${likeClass}`}
            onClick={() => this.removeItemFromCart()}>
            <i class={`fa ${heartLogo} fa1`} aria-hidden="true"></i>
            </button>
        );
        return (this.state.addedToCart) ? removeLikeButton : addLikeButton;
    }

    handleRadioButton(){
        const url = "https://storage.googleapis.com/spec-tacular/"
        const type= this.props.spectacle.description
        return(this.props.spectacle.color.map((color, index) => 
            <div className="spectacle-color-options">
                <input 
                    type="radio"
                    name={"radio-color" + index.toString()}
                    id={"r" + color + index.toString() + "-" + this.props.spectacle.id.toString() }
                    value={ url + type + "/" + color + "/1.jpg" }
                    onChange={this.onSelectedColor}
                    checked={this.state.image_url === url + type + "/" + color + "/1.jpg" }
                /> 
                <label for={"r"+ color + index.toString() + "-" + this.props.spectacle.id.toString() } > <span id={color}></span> </label>
            </div>
        
        ))
    }

    onSelectedColor(e){
        // debugger; 
        console.log(this.props.spectacle.id);   
        this.setState({ imageUrl: e.target.value})
        document.getElementById("spectacle-" + this.props.spectacle.id.toString()).setAttribute("class", "transform-y");    
    }


    render(){
        const {spectacle} = this.props
        return(
        <li className="spectacle-thumbnail col-md-3">
            <Link to={`/spectacles/${spectacle.id}`} className="spectacle-link">
                <img src={this.state.imageUrl} className="spectacle-image" alt={spectacle.title} /> 
                <span className="spectacle-title">{spectacle.title}{spectacle.id}</span> 
            </Link>
            <div className="spectacle-index-options-container">
                <div className="heart-icon">
                    {this.handleCartButton()}
                </div> 
                <form className="radio-form">
                    {this.handleRadioButton()}
                </form>
               
            </div>  
        </li>) 
    }
    
}; 

export default SpectacleIndexItem;

