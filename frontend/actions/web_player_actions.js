export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const SELECT_TRACK = "SELECT_TRACK";
export const PLAY_NEXT = "PLAY_NEXT";
export const PLAY_PREV = "PLAY_PREV";
export const ADD_TO_QUEUE = "ADD_TO_QUEUE";

export const togglePlayTrack = () => {
  return {
    type: TOGGLE_PLAY
  };
};

export const selectTrack = trackId => {
  return {
    type: SELECT_TRACK,
    trackId
  };
};

export const playNextTrack = queue => {
  return {
    type: PLAY_NEXT,
    queue
  };
};

export const playPrevTrack = queue => {
  return {
    type: PLAY_PREV,
    queue
  };
};

export const addToQueue = tracks => {
  return {
    type: ADD_TO_QUEUE,
    tracks
  };
};