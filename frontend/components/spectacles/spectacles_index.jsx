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
             
        return(
            <section className="col-md-12 spectacle-app">
                <div className="jumbotron jumbotron-fluid" ></div> 
                <div className="row" >
                    <ul className="spectacle-list-group"> 
                        {spectacles.map(spectacle => <SpectacleIndexItem key={spectacle.id} 
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

