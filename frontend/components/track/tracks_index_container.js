import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/tracks_actions';
import TracksIndex from './tracks_index';

const mapStateToProps = state => {
  return {
    tracks: Object.values(state.entities.tracks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTracks: () => dispatch(fetchTracks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
