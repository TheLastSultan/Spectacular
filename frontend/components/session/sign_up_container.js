import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions';
import React from 'react';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(signUp(formUser)) 
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

    render(){
        return(
            <div className="session-form">
                <h2> Sign UP! </h2>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        /> 
                    </label>

                    <label>Email:
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
                        />
                    </label>
                    
                    <button onClick={this.handleSubmit}> Sign Up </button>
                </form>
            </div> 
        );
    }
};


export default connect(null, mapDispatchToProps)(Signup)