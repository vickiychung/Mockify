import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../../actions/tracks_actions';
import { RECEIVE_ALBUM } from '../../actions/albums_actions';
import { 
  RECEIVE_PLAYLIST_TRACK, 
  REMOVE_PLAYLIST_TRACK, 
  RECEIVE_PLAYLIST_PAYLOAD } from '../../actions/playlists_actions';

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_TRACK:
      newState[action.track.id] = action.track;
      return newState;
      
    case RECEIVE_TRACKS:
      return action.tracks;

    case RECEIVE_ALBUM:
      return Object.assign(newState, action.tracks);

    case RECEIVE_PLAYLIST_PAYLOAD:
      return action.tracks ? action.tracks : {};

    case RECEIVE_PLAYLIST_TRACK:
      return newState;

    case REMOVE_PLAYLIST_TRACK:
      delete newState[action.trackId]
      return newState;
  
    default:
      return oldState;
  }
};

export default tracksReducer;
