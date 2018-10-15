import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions';
import React from 'react';

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
        debugger; 
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

    render(){
        return(
        <div className="session-form-container col-md-12">
            <div className="session-form col-md-10 ">
                <form className="form-group col-md-6 offset-md-4">
                    <div className="form-group form-title offset-md-4" >
                        {this.renderErrors()}
                        <h2>Log In!</h2>
                    </div>
                <div className="form-group form-title offset-md-2" >
                    <label>Username:
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        className="form-control"
                    />
                    </label>

                    <label>Email:
                        <br/>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
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
                    
                
                    <button onClick={this.handleSubmit}> Sign Up </button>
                    </div> 
                </form>
            </div> 
        </div>
        );
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Signup);