import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists, clearArtists } from '../../actions/artists_actions';
import ArtistsIndex from './artists_index';

const mapStateToProps = state => {
  return {
    artists: Object.values(state.entities.artists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
    clearArtists: () => dispatch(clearArtists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsIndex);
