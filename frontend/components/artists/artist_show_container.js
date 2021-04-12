import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artists_actions';
import ArtistShow from './artist_show';

const mapStateToProps = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.artistId],
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
