import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';


const mapDispatchToProps = dispatch => {
    return({
  login: formUser => dispatch(login(formUser)),
    })
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {  
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {user:this.state})
    this.props.login(user)
      .then(() => this.props.history.push('/spectacles'));
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form-container">
        <div className="session-form">
          <form className="form-group">
            <div className="form-group" >
              <h2>Log In!</h2>
            </div>
              <div className="form-group form-title" >
              <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                className="form-control"
              />
              </label>

              <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className="form-control"
              />
              </label>
              <br/>
              
            <div className="form-group " >
            <button onClick={this.handleSubmit} className="btn btn-primary">Log In!</button>
            </div>
            
            </div> 
          </form>
        </div> 
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
