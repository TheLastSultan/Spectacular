import React from 'react';
import { fetchSpectacles, fetchSpectacle } from '../../actions/spectacle_action';
import { connect } from 'react-redux';
import SpectacleIndex from './spectacles_index'

const mapStateToProps = (state, ownProps) => {
    const ownId = ownProps.match.params.spectacleId
    return {
        spectacle: Object.keys(state.entities.spectacles.ownId).map(key => state.entities.spectacles.ownId[key]),
        loading: state.ui.loading.detailLoading
        }
        debugger; 
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




