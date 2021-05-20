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

  return {
    tracks: Object.values(state.entities.tracks),
    albums: state.entities.albums,
    currentTrack: state.ui.webPlayer.currentTrack,
    playStatus: state.ui.webPlayer.playStatus,
    shuffleOn: state.ui.webPlayer.shuffleOn,
    loopOn: state.ui.webPlayer.loopOn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlayTrack: () => dispatch(togglePlayTrack()),
    selectTrack: track => dispatch(selectTrack(track)),
    playNextTrack: queue => dispatch(playNextTrack(queue)),
    playPrevTrack: queue => dispatch(playPrevTrack(queue)),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleLoop: () => dispatch(toggleLoop())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebPlayer);
