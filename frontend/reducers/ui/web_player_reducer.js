import {
  TOGGLE_PLAY,
  SELECT_TRACK,
  PLAY_NEXT,
  PLAY_PREV
} from '../../actions/web_player_actions';

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

    case PLAY_NEXT:
      let currentTrack = action.queue.find(trackObj => trackObj.id === oldState.currentTrackId);
      let currentQueueId = action.queue.indexOf(currentTrack);
      let nextQueueId, nextTrack, nextTrackId;

      if (currentQueueId + 1 < action.queue.length) {
        nextQueueId = currentQueueId + 1;
        nextTrack = action.queue[nextQueueId];
        nextTrackId = nextTrack.id;
        newState.currentTrackId = nextTrackId;
        return newState;
      } else if (currentQueueId + 1 === action.queue.length) {
        return _initialState;
      }

    case PLAY_PREV:
      let currentTrack = action.queue.find(trackObj => trackObj.id === oldState.currentTrackId);
      let currentQueueId = action.queue.indexOf(currentTrack);
      let prevQueueId, prevTrack, prevTrackId;

      if (currentQueueId - 1 >= 0) {
        prevQueueId = currentQueueId - 1;
        prevTrack = action.queue[prevQueueId];
        prevTrackId = prevTrack.id;
        newState.currentTrackId = prevTrackId;
        return newState;
      } else if (currentQueueId - 1 < 0) {
        return _initialState;
      }

    default:
      return oldState;
  }
};

export default webPlayerReducer;
