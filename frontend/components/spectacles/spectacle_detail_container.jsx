import React from 'react';
import { fetchSpectacles, fetchSpectacle } from '../../actions/spectacle_action';
import { connect } from 'react-redux';
import SpectacleIndex from './spectacles_index'
import SlideShow from '../sidecomponents/slider/slide_root'; 
import ReactSlick from '../sidecomponents/slick-slider/component';
import {sendCartItem, deleteCartItem} from '../../actions/cart_actions';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    
    const spectacle = state.entities.spectacles[ownProps.match.params.spectacleId]
    // debugger; 
    return {
        spectacle: spectacle,
        loading: state.ui.loading.indexLoading
        }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSpectacles: () => dispatch(fetchSpectacles()),
        fetchSpectacle: (id) => dispatch(fetchSpectacle(id)),
        sendCartItem: (item) => dispatch(sendCartItem(item)),
        removeCartItem: (item) => dispatch(deleteCartItem(item))
    }
};

class SpectacleDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            addedToCart: false,
            color_selected: false,
            progresive: false
        }
    }

    componentWillReceiveProps(nextProps){
        if (this.props.match.params.spectacleId !== nextProps.match.params.spectacleId){
            this.props.fetchSpectacle(nextProps.match.params.spectacleId)
        }
    }

    componentDidMount(){
      this.props.fetchSpectacles();
      this.props.fetchSpectacle(this.props.match.params.spectacleId); 
      if (this.state.color_selected == false && this.props.loading == false ){
          this.setState({color_selected: this.props.spectacle.color[0]})
      }
    }

    handleRadioButton(){ 
        const url = "https://storage.googleapis.com/spec-tacular/"
        const type= this.props.spectacle.description
        return(this.props.spectacle.color.map((color, index) => 
            <form className="spectacle-color-options">
                <input 
                    type="radio"
                    name={"radio-color" + index.toString()}
                    id={"r" + color + index.toString() + "-" + this.props.spectacle.id.toString() }
                    value={color}
                    onChange={(e) => this.onSelectedColor(e)}
                    checked={this.state.color_selected === color}
                /> 
                <label for={"r"+ color + index.toString() + "-" + this.props.spectacle.id.toString() } > <span id={color} ></span> </label>
            </form>
        
        ))
    }

    onSelectedColor(e){  
        this.setState({ color_selected: e.target.value});
    }
   

    addItemToCart(){
        const spectacleId = this.props.spectacle.id
        const item = {spectacleId: `${spectacleId}` }
        this.props.sendCartItem(item).then( () => this.setState({addedToCart: true}))
    }

    removeItemFromCart(){
        const spectacleId = this.props.spectacle.id        
        this.props.removeCartItem(spectacleId).then(() => this.setState({addedToCart: false}))
    }

    handleCartButton() {

        const likeClass = (this.state.addedToCart) ? 'no-like' : 'like';
    
        const addLikeButton = (
          <button
            className="detail-a"
            onClick={() => this.addItemToCart()}
            > Add Item to Cart </button>
        );
        const removeLikeButton = (
          <button
            className="detail-a"
            onClick={() => this.removeItemFromCart()}
            > Remove Item from Cart </button>
        );
        return (this.state.addedToCart) ? removeLikeButton : addLikeButton;
    }

    switchBetweenRx(){
        if (this.state.progressive == true){
            this.setState({progresive:false})
        }else{
            this.setState({progressive:true})
        }
    }
    
    render(){
        // debugger; 
        
        if (this.props.loading) { return <h4>
             <div className="large-loader-container"> 
                <ClipLoader
                    sizeUnit={"px"}
                    size={500}
                    color={'#123abc'}
                /> 
            </div>
        </h4>; }
        let { sex, description, title , price } = this.props.spectacle
        if (title != false){
            sex = "UNISEX"
        } else {
            sex = "Women"
        }




        let color = this.state.color_selected || this.props.spectacle.color[0]

        return(
            <section className="col-md-10 spectacle-detail">
                <h3 className="tagline"> Glasses / {sex} / {title}  </h3> 
                    <ReactSlick color={color} description={description} />
                <div className="detail-elements">
                    <h2 className="detail-title"> {title} </h2>
                    <span> Starting at ${price}, including prescription lenses </span>
                    <div className="detail-radio-container">
                        {this.handleRadioButton()}
                    </div> 
                    <div className="button-holders">
                        {this.handleCartButton()}
                        <Link to={'/cart'}>
                            <button className="detail-a"> Buy from ${price} </button>
                        </Link>
                    </div>

                    <div className="detail-detail-container">
                        
                        <img src="https://storage.googleapis.com/spec-tacular/detail-page/about-the-frames.png" />
                        
                        <div onClick={() => this.switchBetweenRx()}> 
                            {this.state.progressive ? <img src="https://storage.googleapis.com/spec-tacular/detail-page/Rx-options-1b.png"/> :
                        <img src="https://storage.googleapis.com/spec-tacular/detail-page/rx-options-2.png"/>}
                        {console.log(this.state.progressive)}
                        
                        </div>
                        
                        <Link to={'/browse'} className="detail-link">
                            <img src="https://storage.googleapis.com/spec-tacular/detail-page/Recommended.png"/>
                        </Link>
                    
                    </div> 
                </div> 
            </section>
        ); 
    }
}; 

export default connect(mapStateToProps,mapDispatchToProps)(SpectacleDetail);





            