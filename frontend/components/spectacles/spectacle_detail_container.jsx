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






