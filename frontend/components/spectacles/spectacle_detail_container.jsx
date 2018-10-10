import React from 'react';
import { fetchSpectacles, fetchSpectacle } from '../../actions/spectacle_action';
import { connect } from 'react-redux';
import SpectacleIndex from './spectacles_index'
import SlideShow from '../sidecomponents/slider/slide_root'; 

const mapStateToProps = (state, ownProps) => {
    
    const spectacle = state.entities.spectacles[ownProps.match.params.spectacleId]
    // debugger; 
    return {
        spectacle: spectacle,
        loading: state.ui.loading.indexLoading
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
            this.props.fetchSpectacle(nextProps.match.params.spectacleId)
        }
    }

    componentDidMount(){
      this.props.fetchSpectacles();
      this.props.fetchSpectacle(this.props.match.params.spectacleId);
    }

    // color "green"
    // description"Facere lomo pork belly. Bicycle rights id suscipit. Iure pbr&b amet nisi minus. 8-bit a organic accusamus natus exercitationem you probably haven't heard of them. Et tattooed quia butcher voluptatem mustache."
    // fit"Wide"
    // id3
    // image_url "/assets/3-5f1131d3b452e2a597cf3533925b18c609398948dff7ef0498a89d6856bff943.jpg"
    // material "Polycarbonate"
    // sex false
    // shape"Oval"
    // staffpick:true
    // title:string

    
    render(){
        
        if (this.props.loading) { return <h4></h4>; }
        const { color , description, fit , material , shape , staffpick, title , price } = this.props.spectacle
        let {sex} = this.props.spectacle

        if (title != false){
            sex = "UNISEX"
        } else {
            sex = "Women"
        }



        return(
            <section className="col-md-12 spectacle-detail">
                <span> {color}</span> 

                <span className="tagline"> eyeglasses / {sex} / {title} </span>  
                <span className="price"> Starting at ${price}, including prescription lenses </span> 
                <button> Try at Home for Free</button>
                <button> Buy From ${price}</button> 

            </section>
        ); 
    }
}; 

export default connect(mapStateToProps,mapDispatchToProps)(SpectacleDetail);




