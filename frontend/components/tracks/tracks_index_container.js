import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/tracks_actions';
import {
  togglePlayTrack, 
  selectTrack, 
  playNextTrack,
  playPrevTrack
} from '../../actions/web_player_actions';
import TracksIndex from './tracks_index';

const mapStateToProps = state => {
  let selectedTrackId;
  if (state.ui.webPlayer.currentTrackId) {
    selectedTrackId = state.ui.webPlayer.currentTrackId;
  }

  return {
    tracks: Object.values(state.entities.tracks),
    currentTrack: state.entities.tracks[selectedTrackId],
    playStatus: state.ui.webPlayer.playStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    togglePlayTrack: () => dispatch(togglePlayTrack()),
    selectTrack: trackId => dispatch(selectTrack(trackId)),
    playNextTrack: queue => dispatch(playNextTrack(queue)),
    playPrevTrack: queue => dispatch(playPrevTrack(queue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
