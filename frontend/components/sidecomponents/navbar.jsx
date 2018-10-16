import React from 'react';
import { Route, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { currentUser, logout, signUp } from '../../actions/session_actions';
import { connect } from 'react-redux';
import {isEmpty} from 'lodash';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
   return{ 
        logout: () => dispatch(logout()),
        signUp: () => dispatch(signUp())
    }
};


class Navbar extends React.Component{
    constructor(props){
        super(props);  
    
        this.handleLogOut = this.handleLogOut.bind(this);
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
    }else if(this.props.currentUser.session_token == undefined){
        display = guestUser;
    }else{
        display = logOut; 
    }

    return (
    <div> 
    <div className="navbar-container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"> <span className="navbar-brand"> Spectacular </span></a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
                <Link className="link-navbar" to='/'>
                    <span className="nav-item">Eyeglasses</span>
                </Link>
                <Link className="link-navbar" to='/'>
                    <span className="nav-item">Sunglasses</span>
                </Link>  
                <Link className="link-navbar" to='/'>
                    <span className="nav-item">Home Try-On</span>
                </Link>            
            </ul>

        
            <ul className="navbar-nav mr-auto">
                <Link className="link-navbar" to={`#`}>
                    <FontAwesomeIcon icon="search" className="faSearch" />
                    <span className="nav-item">search  | </span>
                </Link>
                {display}  
                <Link className="link-navbar" to='/cart'>
                    <span className="nav-item">cart</span>
                    <FontAwesomeIcon icon="shopping-cart" className="faShoppingCart" />
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
