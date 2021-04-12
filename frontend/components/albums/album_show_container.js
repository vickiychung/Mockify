import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/albums_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    tracks: Object.values(state.entities.tracks)
      .filter(track => track.albumId === album.id),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
