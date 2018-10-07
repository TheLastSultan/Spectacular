// Component
import React from 'react';
import SpectacleIndexItem from './spectacles_index_item';
import { Route } from 'react-router-dom';


class SpectacleIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.fetchSpectacles();
    }


    render(){
        const { spectacles , loading } = this.props;

        if (loading) { return <h4> loading.. </h4>; }
         
        // let glasses = spectacles.map( spectacle => (
        //     <SpectacleIndexItem
        //         key={spectacle.id}
        //         spectacle={spectacle}
        //     /> 
        // ))

        
        return(
            <section>
                <ul> 
                   {spectacles.map(spectacle => <SpectacleIndexItem key={spectacle.id} spectacle={spectacle} /> )}
                </ul> 
            </section>
        ); 
    }
}; 

export default SpectacleIndex; 

