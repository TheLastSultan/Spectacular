import React from 'react';
import { fetchSpectacles, fetchSpectacle } from '../../actions/spectacle_action';
import { connect } from 'react-redux';
import SpectacleIndex from './spectacles_index'
import SlideShow from '../sidecomponents/slider/slide_root'; 

const mapStateToProps = (state, ownProps) => {
    // debugger; 
    const spectacle = state.entities.spectacles[ownProps.match.params.spectacleId]
    
    return {
        spectacle: spectacle,
        loading: state.ui.loading.detailLoading
        }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSpectacles: () => dispatch(fetchSpectacles()),
        fetchSpectacle: (id) => dispatch(fetchSpectacle(id))
    }
};

class SpectacleDetail extends React.Component{

    constructor(props){
        super(props);

    }

    componentWillReceiveProps(nextProps){
        if (this.props.match.params.spectacleId !== nextProps.match.params.spectacleId){
            this.props.fetchSpectalce(nextProps.match.params.spectacleId)
        }
    }

    componentDidMount(){
    //   this.props.fetchSpectacles();
      this.props.fetchSpectacle(this.props.match.params.spectacleId);
    }


    render(){

        if (loading) { return <h4> loading.. </h4>; }
    
             
        return(
            <section className="col-md-12 spectacle-detail">
                <span> {this.props.spectacle.title}</span>
            </section>
        ); 
    }
}; 

export default connect(mapStateToProps,mapDispatchToProps)(SpectacleDetail);




