import * as SpectacleAPIUtil from '../util/spectacle_api_util';

export const RECEIVE_SPECTACLES = "RECEIVE_SPECTACLES";
export const RECEIVE_SPECTACLE = "RECEIVE_SPECTACLE";
export const START_LOADING_ALL_SPECTACLES =  "START_LOADING_ALL_SPECTACLES";
export const START_LOADING_SINGLE_SPECTACLE = "START_LOADING_SINGLE_SPECTACLE";


export const loadingAllSpectacle = () => ({
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
    SpectacleAPIUtil.fetchSpectacles().then(Spectacles => dispatch(receiveSpectacles(spectacles)))
};
    
export const fetchSpectacle = id => dispatch => (
    SpectacleAPIUtil.fetchSpectacle(id).then(Spectacle => dispatch(receiveSpectacle(Spectacle)))
);

