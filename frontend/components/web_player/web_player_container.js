import React from 'react';
import { connect } from 'react-redux';
import {
  togglePlayTrack,
  selectTrack,
  playNextTrack,
  playPrevTrack,
  toggleShuffle,
  toggleLoop
} from '../../actions/web_player_actions';
import WebPlayer from './web_player';

const mapStateToProps = state => {
  let selectedTrackId;
  if (state.ui.webPlayer.currentTrackId) {
    selectedTrackId = state.ui.webPlayer.currentTrackId;
  }

  return {
    currentTrack: state.entities.tracks[selectedTrackId],
    playStatus: state.ui.webPlayer.playStatus,
    shuffleOn: state.ui.webPlayer.shuffleOn,
    loopOn: state.ui.webPlayer.loopOn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlayTrack: () => dispatch(togglePlayTrack()),
    selectTrack: trackId => dispatch(selectTrack(trackId)),
    playNextTrack: queue => dispatch(playNextTrack(queue)),
    playPrevTrack: queue => dispatch(playPrevTrack(queue)),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleLoop: () => dispatch(toggleLoop())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebPlayer);
