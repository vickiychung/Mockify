// export const PLAY_TRACK = "PLAY_TRACK";
// export const PAUSE_TRACK = "PAUSE_TRACK";

// export const playTrack = () => {
//   return {
//     type: PLAY_TRACK
//   };
// };

// export const pauseTrack = () => {
//   return {
//     type: PAUSE_TRACK
//   };
// };

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
