import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/tracks_actions';
import { fetchAlbums } from '../../actions/albums_actions';
import { fetchArtists } from '../../actions/artists_actions';
import { selectTrack, togglePlayTrack } from '../../actions/web_player_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    tracks: Object.values(state.entities.tracks),
    albums: state.entities.albums,
    artists: state.entities.artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    selectTrack: track => dispatch(selectTrack(track)),
    togglePlayTrack: () => dispatch(togglePlayTrack())
  };
};

export default connect(mapStateToProps,, mapDispatchToProps)(Search);
