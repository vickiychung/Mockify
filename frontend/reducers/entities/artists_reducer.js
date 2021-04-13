import { RECEIVE_ARTISTS, RECEIVE_ARTIST, CLEAR_ARTISTS } from '../../actions/artists_actions';

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

    default:
      return oldState;
  }
};

export default artistsReducer;
