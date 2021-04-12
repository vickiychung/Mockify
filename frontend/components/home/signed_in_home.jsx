import React from 'react';
import HeaderBarContainer from '../header_bar/header_bar_container';
import SideBar from '../side_bar/side_bar';
import ArtistsIndexContainer from '../artists/artists_index_container';
import AlbumsIndexContainer from '../albums/albums_index_container';
import WebPlayerContainer from '../web_player/web_player_container';

class SignedInHome extends React.Component {
  constructor(props) {
    super(props);
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

    return (
      <div className="signed-in-home-container">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="header-bar-container">
          <HeaderBarContainer />
        </div>

        <div className="main-container">

          <div className="artists-index">
            <ArtistsIndexContainer />
          </div>

          <div className="albums-index">
            <AlbumsIndexContainer />
          </div>
        </div>

        <div className="webplayer-container">
          {/* <WebPlayer
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
          /> */}
          <WebPlayerContainer />
        </div>
      </div>
    );
  }
}

export default SignedInHome;
