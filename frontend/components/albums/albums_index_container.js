import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../actions/albums_actions';
import AlbumsIndex from './albums_index';

const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    clearAlbums: () => dispatch(clearAlbums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex);
