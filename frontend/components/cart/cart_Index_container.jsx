import { connect } from 'react-redux'
import { fetchCartItems} from '../../actions/cart_actions';
import CartIndexItem from './cart_index_item';
import React from 'react';

const mapStateToProps = state => {
    return {
        spectacles: Object.values(state.cart),
        loading: state.ui.loading.indexLoading,
        price: state.cart.price_total,
        total_items: state.cart.cart_count
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

        if (this.props.loading) { return <h4> loading.. </h4>; }

        const cartIndexItems = this.props.spectacles.map( (spectacle) => <CartIndexItem  key={spectacle.id} deleteCartItem={this.props.deleteCartItem} spectacle={spectacle} />)
            return(<div>
                <ul>
                    {cartIndexItems}
                </ul>
            </div>); 
    }
}; 




export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)
