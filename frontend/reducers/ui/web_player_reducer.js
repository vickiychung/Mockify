import {
  TOGGLE_PLAY,
  SELECT_TRACK,
  PLAY_NEXT,
  PLAY_PREV,
  TOGGLE_SHUFFLE,
  TOGGLE_LOOP
} from '../../actions/web_player_actions';

const _initialState = Object.freeze({
  // currentTrackId: null,
  currentTrack: null,
  playStatus: false,
  shuffleOn: false,
  loopOn: false
});

const webPlayerReducer = (oldState = _initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  let currentTrack, currentQueueId;

  switch (action.type) {
    case TOGGLE_PLAY:
      newState.playStatus = !oldState.playStatus;
      return newState;

    case SELECT_TRACK:
      // newState.currentTrackId = action.trackId
      newState.currentTrack = action.track;
      return newState;

    case PLAY_NEXT:
      // currentTrack = action.queue.find(trackObj => trackObj.id === oldState.currentTrackId);
      currentTrack = action.queue.find(trackObj => trackObj.id === oldState.currentTrack.id);
      currentQueueId = action.queue.indexOf(currentTrack);
      let nextQueueId, nextTrack, nextTrackId;

      if (currentQueueId + 1 < action.queue.length) {
        nextQueueId = currentQueueId + 1;
        nextTrack = action.queue[nextQueueId];
        // nextTrackId = nextTrack.id;
        // newState.currentTrackId = nextTrackId;
        newState.currentTrack = nextTrack;
        return newState;
      } else if (currentQueueId + 1 === action.queue.length) {
        if (oldState.loopOn) {
          // newState.currentTrackId = action.queue[0]["id"];
          newState.currentTrack = action.queue[0];
          return newState;
        } else {
          return _initialState;
        }
      }

    case PLAY_PREV:
      // currentTrack = action.queue.find(trackObj => trackObj.id === oldState.currentTrackId);
      currentTrack = action.queue.find(trackObj => trackObj.id === oldState.currentTrack.id);
      currentQueueId = action.queue.indexOf(currentTrack);
      let prevQueueId, prevTrack, prevTrackId;

      if (currentQueueId - 1 >= 0) {
        prevQueueId = currentQueueId - 1;
        prevTrack = action.queue[prevQueueId];
        // prevTrackId = prevTrack.id;
        // newState.currentTrackId = prevTrackId;
        newState.currentTrack = prevTrack;
        return newState;
      } else if (currentQueueId - 1 < 0) {
        if (oldState.loopOn) {
          // newState.currentTrackId = action.queue[action.queue.length - 1]["id"];
          newState.currentTrack = action.queue[action.queue.length - 1];
          return newState;
        } else {
          return _initialState;
        }
      }

    case TOGGLE_SHUFFLE:
      newState.shuffleOn = !oldState.shuffleOn;
      return newState;

    case TOGGLE_LOOP:
      newState.loopOn = !oldState.loopOn;
      return newState;

    default:
      return oldState;
  }
};

export default webPlayerReducer;
