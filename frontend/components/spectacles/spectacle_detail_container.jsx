import React from 'react';
import { fetchSpectacles, fetchSpectacle } from '../../actions/spectacle_action';
import { connect } from 'react-redux';
import SpectacleIndex from './spectacles_index'

const mapStateToProps = (state, ownProps) => {
    debugger; 
    return {
        spectacle: Object.keys(state.entities.spectacles).map(key => state.entities.spectacles[key]),
        loading: state.ui.loading.detailLoading
        }
};

const mapDispatchToProps = dispatch => {
    return {fetchSpectacle: () => dispatch(fetchSpectacle())}
};

class SpectacleDetail extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.fetchSpectacle();
    }


    render(){
        const { spectacles , loading } = this.props;

        if (loading) { return <h4> loading.. </h4>; }
             
        return(
            <section className="col-md-12 spectacle-detail">
                <div className="row" >
                   <h2> Let's start from here </h2> 
                </div>
            </section>
        ); 
    }
}; 

export default connect(mapStateToProps,mapDispatchToProps)(SpectacleDetail);




