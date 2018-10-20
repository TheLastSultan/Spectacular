import React from 'react';
import { Route, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { currentUser, logout, signUp } from '../../actions/session_actions';
import { fetchCartItems} from '../../actions/cart_actions';
import { connect } from 'react-redux';
import {isEmpty} from 'lodash';


const mapStateToProps = (state, ownProps) => {
    let specs = []
    for(let key in state.cart) {
        if (key != "cart_count" && key != "price_total") {
            specs.push(state.cart[key])
        }
    }
    
    let finalCartLength = undefined
    specs.length > state.cart.cart_count ? finalCartLength = specs.length : finalCartLength = state.cart.cart_count 

    return{
        currentUser: state.session.currentUser,
        cartNumber: finalCartLength
    }
};


const mapDispatchToProps = dispatch => {
   return{ 
        logout: () => dispatch(logout()),
        signUp: () => dispatch(signUp()),
        fetchCartItems: () => dispatch(fetchCartItems())
    }
};

 
class Navbar extends React.Component{
    constructor(props){
        super(props);  
    
        this.handleLogOut = this.handleLogOut.bind(this);
    }


    componentDidMount(){
        // debugger;
        this.props.fetchCartItems()
    }

    handleLogOut(){
        this.props.logout()

    }

    render(){
        
    const logOut = 
        <div className="link-navbar">
            <Link className="link-navbar" to={`#`}>
                <span className="nav-item" onClick={this.handleLogOut}>Logout</span>
            </Link>
        </div>
    
    const guestUser= 
        <section className="guest-user" >
            <Link className="link-navbar" to='/login'>
                <span className="nav-item">Sign in</span>
            </Link>
        </section>

    let display = undefined 
    if(isEmpty(this.props.currentUser)){
        this.props.signUp();
        display = guestUser;
    }else if(this.props.currentUser.guest_user == false){
        display = logOut; 
    }else{
        display = guestUser; 
    }

    return (
    <div> 
    <div className="navbar-container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"> <span className="navbar-brand"> Spectacular </span></a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
                <Link className="link-navbar" to='/browse'>
                    <span className="nav-item">Eyeglasses</span>
                </Link> 
                <Link className="link-navbar" to='/'>
                    <span className="nav-item">Home Try-On</span>
                </Link>   
                <Link className="link-navbar" to='https://github.com/TheLastSultan/Spectacular'>
                    <span className="nav-item">GithubRepo</span>
                </Link>          
            </ul>

        
            <ul className="navbar-nav custom-nav">
                <Link className="link-navbar" to={`#`}>
                    <FontAwesomeIcon icon="search" className="faSearch" />
                    <span className="nav-item">search  | </span>
                </Link>
                {display}  
                <Link className="link-navbar" to='/cart'>
                    <span className="nav-item">cart</span>
                    <FontAwesomeIcon icon="shopping-cart" className="faShoppingCart" />
                    <span className="cnumber">{this.props.cartNumber}</span>
                </Link>   
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>            
            </ul>
        </div> 
    </nav> 
    </div> 
    </div>)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)




// EYEGLASSES /browse_mens_glasses
// SUNGLASSES /browse_womens_glasses
// HOME TRY-ON /about_home_try_on
// LOCATIONS /locations
// SEARCH /search
// HELP /help 
// SIGN IN /signIn
// Register /register 
// Sign OUt /signOut

// CART /cart
