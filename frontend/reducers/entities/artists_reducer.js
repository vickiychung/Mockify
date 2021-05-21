import { RECEIVE_ARTISTS, RECEIVE_ARTIST, CLEAR_ARTISTS } from '../../actions/artists_actions';
import { RECEIVE_ALBUM } from '../../actions/albums_actions';
import { RECEIVE_PLAYLIST_PAYLOAD } from '../../actions/playlists_actions';

const artistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;

    case RECEIVE_ARTIST:
      newState[action.artist.id] = action.artist;
      return newState;

    case CLEAR_ARTISTS:
      return {};

    case RECEIVE_ALBUM:
      newState[action.album.artist.id] = action.album.artist;
      return newState;

    case RECEIVE_PLAYLIST_PAYLOAD:
      return action.artists ? action.artists : {};

    default:
      return oldState;
  }
};

export default artistsReducer;
