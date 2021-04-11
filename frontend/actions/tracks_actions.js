import * as TracksAPIUtil from '../util/tracks_api_util';

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

const receiveTracks = tracks => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  };
};

const receiveTrack = track => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};

export const fetchTracks = () => {
  return (dispatch => {
    return (
      TracksAPIUtil.fetchTracks().then(tracks => dispatch(receiveTracks(tracks)))
    );
  });
};

export const fetchTrack = trackId => {
  return (dispatch => {
    return (
      TracksAPIUtil.fetchTrack(trackId).then(track => dispatch(receiveTrack(track)))
    );
  });
};
