import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../side_bar/side_bar';
import WebPlayer from '../web_player/web_player';

class SignedInHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { currentUser, signOut } = this.props;
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

    return (
      <div className="home-wrapper">
        <div className="home-container">
          <div className="sidebar-container">
            <SideBar 
              currentUser={currentUser}
              signOut={signOut}
            />
          </div>

          <div className="main-container">
            <div className="album-photo">
              <p>album photo can be here</p>
              <Link to="/">temporary link to go back to home</Link>
            </div>

            <ul className="tracks-container">
              {/* {list} */}
            </ul>
          </div>
          <br />
        </div>

        <div className="webplayer-container">
          <WebPlayer
            currentTrack={currentTrack}
            playStatus={playStatus}
            togglePlayTrack={togglePlayTrack}
            tracks={tracks}
            playNextTrack={playNextTrack}
            playPrevTrack={playPrevTrack}
            toggleShuffle={toggleShuffle}
            shuffleOn={shuffleOn}
            toggleLoop={toggleLoop}
            loopOn={loopOn}
          />
        </div>
      </div>
    );
  }
}

export default SignedInHome;