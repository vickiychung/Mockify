import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import { fetchTracks } from '../../actions/tracks_actions';
import {
  togglePlayTrack,
  selectTrack,
  playNextTrack,
  playPrevTrack,
  toggleShuffle,
  toggleLoop
} from '../../actions/web_player_actions';
import Home from './home';

const mapStateToProps = state => {
  let selectedTrackId;
  if (state.ui.webPlayer.currentTrackId) {
    selectedTrackId = state.ui.webPlayer.currentTrackId;
  }

  return {
    currentUser: state.entities.users[state.session.id],
    tracks: Object.values(state.entities.tracks),
    currentTrack: state.entities.tracks[selectedTrackId],
    playStatus: state.ui.webPlayer.playStatus,
    shuffleOn: state.ui.webPlayer.shuffleOn,
    loopOn: state.ui.webPlayer.loopOn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    fetchTracks: () => dispatch(fetchTracks()),
    togglePlayTrack: () => dispatch(togglePlayTrack()),
    selectTrack: trackId => dispatch(selectTrack(trackId)),
    playNextTrack: queue => dispatch(playNextTrack(queue)),
    playPrevTrack: queue => dispatch(playPrevTrack(queue)),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleLoop: () => dispatch(toggleLoop())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);