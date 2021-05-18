import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylistPayload, 
  updatePlaylist, 
  deletePlaylist } from '../../actions/playlists_actions';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    tracks: state.entities.tracks,
    albums: state.entities.albums
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylistPayload: playlistId => dispatch(fetchPlaylistPayload(playlistId)),
    updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
