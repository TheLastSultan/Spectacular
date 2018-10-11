import {connect} from 'react-redux';
import {signUp} from '../../actions/session';
import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            email: ''
        }

        this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then( () => this.poprs.history.push('/'))
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

                    <label>Username:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('username')}
                        /> 
                    </label>

                    <label>Password:
                        <input
                             type="text"
                             value={this.state.email}
                             onChange={this.handleInput('password')}
                        />
                    </label>
                    
                    <button onClick={this.handleSubmit}> Sign Up </button>
                </form>
            </div> 
        );
    }
};

const mapDispatchToProps = dispatch => ({
   createNewUser: formUser => dispatch(signUp(formUser)) 
});


export default connect(null, mapDispatchToProps)(Signup)