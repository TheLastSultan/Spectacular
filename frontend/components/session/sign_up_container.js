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
            .then( () => this.conditionalRender())
    }

    handleInput(type){
        return (e) => {
            this.setState({[type] : e.target.value});
        };
    }

    conditionalRender(){
        if (this.props.errors.length > 0 ){
          return this.props.history.push('/login')
        } else {
          this.props.history.push('/')
        }
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

    render(){
        return(
        <div className="session-form-container">
            <form className="form-group col-md-2">
                <div className="form-group form-title" >
                    <h2>Create an account</h2>
                </div>

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
                        />
                    </div> 
                   
                <div className="form-group" >
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            className="form-control"
                            placeholder="Enter Email"
                        /> 
                </div> 


                <div className="form-group"> 
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        className="form-control"
                        placeholder="Enter Password"
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