import * as SpectacleAPIUtil from '../util/spectacle_api_util';

export const RECEIVE_SPECTACLES = "RECEIVE_SPECTACLES";
export const RECEIVE_SPECTACLE = "RECEIVE_SPECTACLE";
export const START_LOADING_ALL_SPECTACLES =  "START_LOADING_ALL_SPECTACLES";
export const START_LOADING_SINGLE_SPECTACLE = "START_LOADING_SINGLE_SPECTACLE";


export const loadingAllSpectacles = () => ({
    type: START_LOADING_ALL_SPECTACLES
})

export const loadingOneSpectacle = () => ({
    type: START_LOADING_SINGLE_SPECTACLE
})

export const receiveSpectacle = spectacle => ({
    type: RECEIVE_SPECTACLE,
    spectacle
})

export const receiveSpectacles = spectacles => ({
    type: RECEIVE_SPECTACLES,
    spectacles
})

// async actions
export const fetchSpectacles = () => dispatch => {
    dispatch(loadingAllSpectacles());
    return SpectacleAPIUtil.fetchSpectacles().then(spectacles => {dispatch(receiveSpectacles(spectacles))});
};
    
export const fetchSpectacle = id => dispatch => {
    dispatch(loadingOneSpectacle());
    return SpectacleAPIUtil.fetchSpectacle(id).then(spectacle => dispatch(receiveSpectacle(spectacle)))
};

