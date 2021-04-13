import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import HeaderBarContainer from '../header_bar/header_bar_container';
import SideBar from '../side_bar/side_bar';
import TracksIndexItem from '../tracks/tracks_index_item';
import WebPlayerContainer from '../web_player/web_player_container';

export class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render() {
    const {
      album,
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
    
    if (album) {
      const list = tracks.map(track => <TracksIndexItem
        key={track.id}
        track={track}
        togglePlayTrack={togglePlayTrack}
        selectTrack={selectTrack}
      />);
      
      return (
        <div className="signed-in-home-container">
            <div className="sidebar-container">
              <SideBar />
            </div>

            <div className="header-bar-container">
              <HeaderBarContainer />
            </div>

            <div className="main-container">
              <div className="album-photo">
                <p>album photo can be here</p>
                <Link to="/">temporary link to go back to home</Link>
              </div>

              <ul className="tracks-container">
                {list}
              </ul>
            </div>

          <div className="webplayer-container">
            <WebPlayerContainer tracks={tracks} album={album} />
          </div>
        </div>

        // <div>
        //   <p>{currentUser.username}</p>

        //   <img src={album.coverUrl} alt="album_cover"/>

        //   <p>ALBUM</p>

        //   <h1>{album.title}</h1>

        //   <p>{album.artistId}</p>

        //   <p>{album.year}</p>

        //   <p>#</p>
        //   <p>TITLE</p>
        //   <p>
        //     <FontAwesomeIcon icon={faClock}/>
        //   </p>
        
        // </div>
      );
    } else {
      return null;
    }
  }
}

export default AlbumShow;
