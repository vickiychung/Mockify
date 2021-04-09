import { TOGGLE_PLAY, SELECT_TRACK } from '../../actions/web_player_actions';

const _initialState = Object.freeze({
  currentTrackId: null,
  playStatus: false
});

const webPlayerReducer = (oldState = _initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case TOGGLE_PLAY:
      newState.playStatus = !oldState.playStatus;
      return newState;

    case SELECT_TRACK:
      newState.currentTrackId = action.trackId
      return newState;

    default:
      return oldState;
  }
};

export default webPlayerReducer;
