import { PLAY_TRACK, PAUSE_TRACK } from '../../actions/web_player_actions';

const _initialState = Object.freeze({
  currentTrackId: null,
  status: ""
});

const webPlayerReducer = (oldState = _initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case PLAY_TRACK:
      newState.status = "playing"
      return newState;
    
    case PAUSE_TRACK:
      newState.status = "paused"
      return newState;

    default:
      return oldState;
  }
};

export default webPlayerReducer;
