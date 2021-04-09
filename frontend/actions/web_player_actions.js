export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const SELECT_TRACK = "SELECT_TRACK";

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
