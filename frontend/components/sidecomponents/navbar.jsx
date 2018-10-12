import React from 'react';
import { Route, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { logout } from '../../actions/session_actions'
import { connect } from 'react-redux'


// const mapStateToProps = (state, ownProps) => ({
//     currentUser: state.session.currentUser
// });

// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logout())
// });

// {currentUser, logout}
const Navbar = () => {
    // const signedIn = 
    //     <Link className="link-navbar" to={`#`}>
    //         <span className="nav-item">Logout</span>
    //     </Link>
    
    // const guestUser = 
    //     <section className="guest-user" >
    //         <Link className="link-navbar" to={`#`}>
    //             <span className="nav-item">Register</span>
    //         </Link>
    //         <Link className="link-navbar" to={`#`}>
    //             <span className="nav-item">Sign-in</span>
    //         </Link>
    //     </section>

    // const display = currentUser ? signedIn : guestUser

    return (
    <div> 
    <div className="navbar-container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"> <span className="navbar-brand"> Spectacular </span></a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
                <Link className="link-navbar" to={`#`}>
                    <span className="nav-item">Eyeglasses</span>
                </Link>
                <Link className="link-navbar" to={`#`}>
                    <span className="nav-item">Sunglasses</span>
                </Link>  
                <Link className="link-navbar" to={`#`}>
                    <span className="nav-item">Home Try-On</span>
                </Link>            
            </ul>

            <ul className="navbar-nav mr-auto">
                <Link className="link-navbar" to={`#`}>
                    <FontAwesomeIcon icon="search" className="faSearch" />
                    <span className="nav-item">search  | </span>
                </Link>
                <Link className="link-navbar" to={`#`}>
                    <span className="nav-item">sign-in</span>
                </Link>  
                <Link className="link-navbar" to={`#`}>
                    <span className="nav-item">cart</span>
                    <FontAwesomeIcon icon="shopping-cart" className="faShoppingCart" />
                </Link>               
            </ul>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div> 
    </nav> 
    </div> 
    </div>)
};

// export default connect(mapStateToProps, mapDispatchToProps)(component)





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
