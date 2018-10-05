import * as SpectacleAPIUtil from '../util/spectacle_api_util';

export const RECEIVE_SPECTACLES = "RECEIVE_SPECTACLES";
export const RECEIVE_SPECTACLE = "RECEIVE_SPECTACLE";

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
    SpectacleAPIUtil.fetchSpectacles().then(Spectacle => dispatch(receiveSpectacles(Spectacle)))
};
    
export const fetchSpectacle = id => dispatch => (
    SpectacleAPIUtil.fetchSpectacle(id).then(Spectacle => dispatch(receiveSpectacle(Spectacle)))
);

