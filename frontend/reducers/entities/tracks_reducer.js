import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../../actions/tracks_actions';
import { RECEIVE_ALBUM } from '../../actions/albums_actions';

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
      return action.tracks;
  
    default:
      return oldState;
  }
};

export default tracksReducer;
