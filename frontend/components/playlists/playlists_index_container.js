import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlists_actions';
import PlaylistsIndex from './playlists_index';

const mapStateToProps = state => {
  return {
    playlists: Object.values(state.entities.playlists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsIndex);
