// Component
import React from 'react';
import SpectacleIndexItem from './spectacles_index_item';
import { Route, Switch } from 'react-router-dom';
import SpectacleDetailContainer from './spectacle_detail_container';


class SpectacleIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.fetchSpectacles();
    }

    render(){
        const { spectacles , loading , sendCartItem } = this.props;

        if (loading) { return <h4> loading.. </h4>; }
             
        return(
            <section className="col-md-12 spectacle-app">
                <div className="jumbotron jumbotron-fluid" ></div> 
                <div className="row" >
                    <ul className="spectacle-list-group"> 
                        {spectacles.map(spectacle => <SpectacleIndexItem key={spectacle.id} spectacle={spectacle} sendCartItem={sendCartItem} /> )}
                    </ul> 
                </div>
            </section>
        ); 
    }
}; 

export default SpectacleIndex; 

