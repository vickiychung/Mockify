import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, createPlaylist } from '../../actions/playlists_actions';
import SideBar from './side_bar';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    playlists: Object.values(state.entities.playlists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
