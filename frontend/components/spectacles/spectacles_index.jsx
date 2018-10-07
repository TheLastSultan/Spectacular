// Component
import React from 'react';
import SpectacleIndexItem from './spectacles_index_item';
import { Route } from 'react-router-dom';


class SpectacleIndex extends React.Component{

    constructor(props){
        super(props);
        this.state.loading = true;
    }

    componentDidMount(){
      this.props.fetchSpectacles();
    }

    componentWillReceiveProps(props) {
        if (props.spectacles) {
            this.setState({"loading": false});
        }   
    }

    render(){ 
        if (this.state.loading) {
            return (
                <h1> loading </h1>
            );
        } 
        return(
            <section>
            </section>
        ); 
    }
}; 

export default SpectacleIndex; 

// spectacle.map( spectacle => (
//     <SpectacleIndexItem
//         key={spectacle.id}
//         spectacle={spectacle}
//     /> 
// ))