import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artists_actions';
import ArtistsIndex from './artists_index';

const mapStateToProps = state => {
  return {
    artists: Object.values(state.entities.artists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsIndex);
