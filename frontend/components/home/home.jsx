import React from 'react';
import Splash from './splash';
import SignedInHome from './signed_in_home';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const {
      currentUser,
      signOut,
      tracks,
      currentTrack,
      playStatus,
      togglePlayTrack,
      selectTrack,
      playNextTrack,
      playPrevTrack,
      toggleShuffle,
      shuffleOn,
      toggleLoop,
      loopOn
    } = this.props;

    const signedIn = () => {
      return (
        <SignedInHome currentUser={currentUser} signOut={signOut} />
      );
    };

    const signedOut = () => {
      return (
        <Splash />
      );
    };

    return currentUser ? signedIn() : signedOut();
  }
}

export default Home;