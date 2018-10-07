
import { fetchSpectacles, fetchSpectacle } from '../../actions/spectacle_action';
import { connect } from 'react-redux';
import SpectacleIndex from './spectacles_index'

const mapStateToProps = state => {
    debugger; 
    return {spectacles: Object.keys(state.entities.spectacles).map(key => state.entities.spectacles[key])}
};

const mapDispatchToProps = dispatch => {
    return {fetchSpectacles: () => dispatch(fetchSpectacles())}
};

// Container 
export default connect(mapStateToProps,mapDispatchToProps)(SpectacleIndex);


