import { RECEIVE_ALBUMS, RECEIVE_ALBUM, CLEAR_ALBUMS } from '../../actions/albums_actions';

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

    default:
      return oldState;
  }
};

export default albumsReducer;
