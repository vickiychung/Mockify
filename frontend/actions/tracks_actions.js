import * as TracksAPIUtil from '../util/tracks_api_util';

export const RECEIVE_TRACK = "RECEIVE_TRACK";

const receiveTrack = track => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};

export const fetchTrack = trackId => {
  return (dispatch => {
    return (
      TracksAPIUtil.fetchTrack(trackId).then(track => dispatch(receiveTrack(track)))
    );
  });
};
