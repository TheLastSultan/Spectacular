import React from 'react';
import { fetchSpectacles, fetchSpectacle } from '../../actions/spectacle_action';
import { connect } from 'react-redux';
import SpectacleIndex from './spectacles_index'

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

        this.props.fetchSpectacles();
    }

    componentWillReceiveProps(nextProps){
        if (this.props.match.params.spectacleId !== nextProps.match.params.spectacleId){
            this.props.fetchSpectalce(nextProps.match.params.spectacleId)
        }
    }

    componentDidMount(){
      this.props.fetchSpectacles();
      this.props.fetchSpectacle(this.props.match.params.spectacleId);
    }


    render(){
        const { spectacles , loading } = this.props;
        // debugger; 

        if (loading) { return <h4> loading.. </h4>; }
             
        return(
            <section className="col-md-12 spectacle-detail">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                   
            </section>
        ); 
    }
}; 

export default connect(mapStateToProps,mapDispatchToProps)(SpectacleDetail);




