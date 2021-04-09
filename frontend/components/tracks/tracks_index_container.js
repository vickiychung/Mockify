import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/tracks_actions';
import { togglePlayTrack, selectTrack } from '../../actions/web_player_actions';
import TracksIndex from './tracks_index';

const mapStateToProps = state => {
  return {
    tracks: Object.values(state.entities.tracks),
    currentTrackId: state.ui.webPlayer.currentTrackId,
    playStatus: state.ui.webPlayer.playStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    togglePlayTrack: () => dispatch(togglePlayTrack()),
    selectTrack: trackId => dispatch(selectTrack(trackId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
