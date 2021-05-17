import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
  RECEIVE_PLAYLIST_PAYLOAD
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
      // return action.playlist;
    
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;

    // case RECEIVE_PLAYLIST_PAYLOAD:
    //   return action.
  
    default:
      return oldState;
  }
};

export default playlistsReducer;
