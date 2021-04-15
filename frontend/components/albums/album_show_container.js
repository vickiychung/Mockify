import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/albums_actions';
import {
  togglePlayTrack,
  selectTrack
} from '../../actions/web_player_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
  let selectedTrackId;
  if (state.ui.webPlayer.currentTrackId) {
    selectedTrackId = state.ui.webPlayer.currentTrackId;
  }
  
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    tracks: Object.values(state.entities.tracks),
    artists: state.entities.artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    togglePlayTrack: () => dispatch(togglePlayTrack()),
    selectTrack: trackId => dispatch(selectTrack(trackId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
