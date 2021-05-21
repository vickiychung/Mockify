import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
  UPDATE_PLAYLIST
} from '../../actions/playlists_actions';

const playlistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    
    case RECEIVE_PLAYLIST:
      newState[action.playlist.id] = action.playlist
      return newState;
    
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;

    case UPDATE_PLAYLIST:
      newState[action.playlist.id].name = action.playlist.name;
      return newState;

    default:
      return oldState;
  }
};

export default playlistsReducer;
