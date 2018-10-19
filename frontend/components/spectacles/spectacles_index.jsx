// Component
import React from 'react';
import SpectacleIndexItem from './spectacles_index_item';
import { Route, Switch } from 'react-router-dom';
import SpectacleDetailContainer from './spectacle_detail_container';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';


class SpectacleIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.fetchSpectacles();
    }

    render(){
        const { spectacles , loading , sendCartItem, removeCartItem} = this.props;

        if (loading) { 
            return (
            <div className="large-loader-container"> 
                <ClipLoader
                    sizeUnit={"px"}
                    size={500}
                    color={'#123abc'}
                /> 
            </div>
            )
        };
             
        const firstsix = spectacles.splice(0,6);
        const nextnine = spectacles.splice(0,9);
        const firstfifteen= spectacles.splice(0,15);
        const rest= spectacles


        return(
            <section className="col-md-12 spectacle-app">
                <div className="jumbotron jumbotron-fluid" ></div> 
                <div className="row" >
                    <ul className="spectacle-list-group"> 
                        {firstsix.map(spectacle => <SpectacleIndexItem key={spectacle.id} 
                                                        spectacle={spectacle} 
                                                        removeCartItem={removeCartItem}
                                                        sendCartItem={sendCartItem} /> )}
                    </ul> 
                    <br/>
                    <div className="hrBorder"></div> 
                    <br/>
                    <div className="feel-good-ad mauto">
                        <img src="https://storage.googleapis.com/spec-tacular/splash/Feel-good.png"/>
                    </div>
                    <br/>
                    <div className="hrBorder"></div> 
                    
                    <ul className="spectacle-list-group"> 
                        {nextnine.map(spectacle => <SpectacleIndexItem key={spectacle.id} 
                                                        spectacle={spectacle} 
                                                        removeCartItem={removeCartItem}
                                                        sendCartItem={sendCartItem} /> )}
                    </ul> 
                    
                    <div className="hrBorder"></div> 
                    <div className="pupil-project-ad mauto">
                        <img src="https://storage.googleapis.com/spec-tacular/splash/pupils-project.png"/>
                    </div>
                    <div className="hrBorder"></div> 
                    
                    <ul className="spectacle-list-group"> 
                        {firstfifteen.map(spectacle => <SpectacleIndexItem key={spectacle.id} 
                                                        spectacle={spectacle} 
                                                        removeCartItem={removeCartItem}
                                                        sendCartItem={sendCartItem} /> )}
                    </ul> 
                    
                    <div className="hrBorder"></div> 
                    
                    <div className="metal-on-metal-ad mauto" mauto>
                            <img src="https://storage.googleapis.com/spec-tacular/splash/metals-on-metals.png"/>
                    </div>
                    <div className="hrBorder"></div> 

                    <ul className="spectacle-list-group"> 
                        {rest.map(spectacle => <SpectacleIndexItem key={spectacle.id} 
                                                        spectacle={spectacle} 
                                                        removeCartItem={removeCartItem}
                                                        sendCartItem={sendCartItem} /> )}
                    </ul> 
                </div>
            </section>

        ); 
    }
}; 

export default SpectacleIndex; 

