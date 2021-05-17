import { RECEIVE_ALBUMS, RECEIVE_ALBUM, CLEAR_ALBUMS } from '../../actions/albums_actions';
import { RECEIVE_ARTIST } from '../../actions/artists_actions';
import { RECEIVE_PLAYLIST_PAYLOAD } from '../../actions/playlists_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;

    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;

    case CLEAR_ALBUMS:
      return {};

    case RECEIVE_ARTIST:
      return Object.assign(newState, action.albums);

    case RECEIVE_PLAYLIST_PAYLOAD:
      return action.albums ? action.albums : {};

    default:
      return oldState;
  }
};

export default albumsReducer;
