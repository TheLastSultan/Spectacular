import React from 'react';
import { fetchSpectacles, fetchSpectacle } from '../../actions/spectacle_action';
import { connect } from 'react-redux';
import SpectacleIndex from './spectacles_index';
import {sendCartItem} from '../../actions/cart_actions';

const mapStateToProps = state => {
    return {
        spectacles: Object.keys(state.entities.spectacles).map(key => state.entities.spectacles[key]),
        loading: state.ui.loading.indexLoading
        }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSpectacles: () => dispatch(fetchSpectacles()),
        sendCartItem: (item) => dispatch(sendCartItem(item))
            }
};


// store.dispatch(sendCartItem({spectacle_id: 27}))
// Container 
export default connect(mapStateToProps,mapDispatchToProps)(SpectacleIndex);


