import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions';
import React from 'react';
import {Link} from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(signUp(formUser)) 
 });

const mapStateToProps = state => ({
    errors: state.sessionErrors
});


 
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        
        e.preventDefault()
        const user = Object.assign({}, {user:this.state})
    
        this.props.createNewUser(user)
            .then( () => this.props.history.push('/'))
    }

    handleInput(type){
        return (e) => {
            this.setState({[type] : e.target.value});
        };
    }

    renderErrors() { 
        return(
          <ul>
            <div className="alert alert-info" role="alert">

                {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </div> 
          </ul>
        );
      }

    render(){
        return(
        <div className="session-form-container">
            <form className="form-group col-md-2">
                <div className="form-group form-title" >
                    <h2>Create an account</h2>
                </div>
                
                <div className="form-group" >
                    <div className="form-group">
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            className="form-control"
                            placeHolder="Enter Username"
                        />
                    </div> 
                   
                <div className="form-group" >
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            className="form-control"
                            placeHolder="Enter Email"
                        /> 
                </div> 


                <div className="form-group"> 
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        className="form-control"
                        placeHolder="Enter Password"
                    />
                </div> 
                    
                
                    <button className="session-button" onClick={this.handleSubmit}> Sign Up </button>
                </div> 
                
                
                <div className="form-title border-top">
                    <h2> I have an account</h2> 
                    <Link className="center-link" to="/login">Login</Link>
                </div>
            </form>
        </div> 
        );
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Signup);