export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const SELECT_TRACK = "SELECT_TRACK";
export const PLAY_NEXT = "PLAY_NEXT";
export const PLAY_PREV = "PLAY_PREV";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const TOGGLE_LOOP = "TOGGLE_LOOP";

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

export const toggleShuffle = () => {
  return {
    type: TOGGLE_SHUFFLE
  };
};

export const toggleLoop = () => {
  return {
    type: TOGGLE_LOOP
  };
};