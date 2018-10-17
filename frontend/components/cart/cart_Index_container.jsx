import { connect } from 'react-redux'
import { fetchCartItems, deleteCartItem} from '../../actions/cart_actions';
import CartIndexItem from './cart_index_item';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        spectacles: Object.values(state.cart),
        loading: state.ui.loading.indexLoading,
        price: state.cart.price_total,
        totalItems: state.cart.cart_count
        }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()), 
        deleteCartItem: (item) => dispatch(deleteCartItem(item))
    }
};


class CartIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCartItems()
    }

    

    render(){
        const {price, totalItems} = this.props;
        if (this.props.loading) { return <h4> loading.. </h4>; }

        const cartIndexItems = this.props.spectacles.map( (spectacle) => <CartIndexItem  key={spectacle.id} deleteCartItem={this.props.deleteCartItem} spectacle={spectacle} />)
            return(
            <div className="col-md-12 cart-container">
                <div className="jumbotron-blank" >
                    <div className="row"> 
                        <span className= "total-items"> You have {totalItems} items in your cart: </span> 
                        <span className="price">  ${price}.00 </span> 
                    </div> 

                    <button> Checkout </button> 
                    <span className="small-text"> Free standard shipping and free returns on all your orders </span> 
                </div> 

               
                <ul className="cart-item-list-group">
                    {cartIndexItems}
                </ul> 

                <div className="hrBorder"></div>

                <div className="cart-advertisement-container">
                    <img src="https://storage.googleapis.com/spec-tacular/AlsoWorthCheckingOut.png" alt="advertisement"/>
                </div> 

                <div className="hrBorder"></div> 
                
                <div className="back-to-shopping">
                    <span className="small-text"> Still want to continue shopping? </span>
                    
                    <Link to={`/`} className="spectacle-link">
                        <button className="btn btn-outline-dark back-to-browse" > Shop Frames </button> 
                    </Link>
                </div>

            </div>
            ); 
    }
}; 





export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)
