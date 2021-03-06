import React from 'react';
import {Link} from 'react-router-dom';


export default class SplashPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: ["at home", "in your pajamas", "while cross-wording", "on the phone", "in your own mirror"],
            count: 0
        }
    }

    componentDidMount(){
            setInterval( () => {
            this.setState({
            count: this.state.count + 1 
            })
        },5003)
    }
    render() {
        const message= <h1 className="animation fadeInLeft slow "> {this.state.messages[this.state.count % 5]}</h1> 

        return (
            <div className="homepage-container">
                <div ClassName="col-md-6" id="main-container">
                    <div className="Static-Header">
                        <h1 id="try-5"> Try 5 pairs for free </h1>
                        {message}
                    </div>
                    <div className="spash-button-holders">
                        <Link to="/quiztime" className="button-link">
                            <button className="splash-pri btn btn-primary btn-lg"> Take a quiz </button>
                        </Link>
                        <Link to="/browse" className="button-link">
                            <button className="splash-second btn btn-outline-secondary btn-lg"> Browse Frames </button>
                        </Link>
                    </div> 
                </div>
                <div className="col-md-4 aside2-container">
                    <img id="splash-img" src="https://storage.googleapis.com/spec-tacular/splash/homepage.jpg" />
                </div>
            </div> 
        )
    }
}
