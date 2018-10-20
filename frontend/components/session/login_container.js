import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import {Link} from 'react-router-dom';

import AnimatedAvatar from './avatar';

const mapDispatchToProps = dispatch => {
    return({
  login: formUser => dispatch(login(formUser)),
    })
};

const mapStateToProps = state => ({
  errors: state.sessionErrors
});


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Create Avatar & Animate the bloke
    let avatar = new AnimatedAvatar(this.threeRootElement, 200, 200);
    avatar.animate();

    // If username textbox gets focus or has a key-stroke, peek at the textbox
    const usernamePeek =  (() => {
      this.usernameHelper.innerHTML = this.usernameField.value;
      let width = this.usernameHelper.offsetWidth;

      avatar.peekAt(this.usernameField, width);
    }).bind(this);
    this.usernameField.addEventListener("focus", usernamePeek);
    this.usernameField.addEventListener("keyup", usernamePeek);

    // If password gets focus, look away
    this.passwordField.addEventListener("focus", () => {
      avatar.lookAway();
    });

    // If username & password doesn't have focus, then reset to idle stance
    const lostFocus = () => {
      // Wait for 500ms to allow focus to be reassigned
      setTimeout(() => {
        let focused = document.activeElement;
        if(this.usernameField !== focused && this.passwordField !== focused)
          avatar.idle();
      }, 500);
    };
    this.usernameField.addEventListener("focusout", lostFocus);
    this.passwordField.addEventListener("focusout", lostFocus);
  }

  handleInput(type) {
    return (e) => {  
      this.setState({ [type]: e.target.value });
    };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
        <div className="alert alert-info" role="alert">
          <li key={`error-${i}`}>
            {error}
          </li>
        </div> 
        ))}
      </ul>
    );
  }

  conditionalRender(){
    if (this.props.errors.length > 0 ){
      return this.props.history.push('/login')
    } else {
      this.props.history.push('/')
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const user = Object.assign({}, {user:this.state})
    this.props.login(user).then(() => this.conditionalRender())
  }

  render() {
    // console.log(this.props);
    
    return (
      
      <div className="session-form-container">
      <form className="form-group col-md-2">
          <div className="form-group form-title" >
              <h2>Sign in </h2>
          </div>

          <div className="avatar-div" ref={element => this.threeRootElement = element}></div>

          <div className="form-group form-errors-container">
              {this.renderErrors()}
          </div> 
          
          <div className="form-group" >
              <div className="form-group">
                  <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleInput('username')}
                      className="form-control"
                      placeholder="Enter Username"
                      ref={element => this.usernameField = element}
                  />
                  <p className="form-control hidden" ref={element=> this.usernameHelper = element}></p>
              </div> 

          <div className="form-group"> 
              <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  className="form-control"
                  placeholder="Enter Password"
                  ref={element => this.passwordField = element}
              />
          </div> 
              
          
              <button className="session-button" onClick={this.handleSubmit}> Sign in </button>
          </div> 
          
          
          <div className="form-title border-top">
              <h2> I'm new here</h2> 
              <Link className="center-link" to="/signup">Register</Link>
          </div>
      </form>
  </div> 
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
