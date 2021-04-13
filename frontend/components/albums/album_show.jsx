import React from 'react';
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
    this.props.fetchArtists();
  }

  render() {
    const {
      album,
      tracks,
      artists,
      togglePlayTrack,
      selectTrack
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
              <div className="album-info">
                <img src={album.coverUrl} alt="album_cover" />

                <div className="album-details">
                  <p>ALBUM</p>
                  <h1>{album.title}</h1>
                  <span>
                    <p>{artists[album.artistId]["name"]}</p>
                    <p>{`\u2022`}</p>
                    <p>{album.year}</p>
                  </span>
                </div>
              </div>

              <div className="tracks-header">
                <p>#</p>
                <p>TITLE</p>
                <p> <FontAwesomeIcon icon={faClock} /> </p>
              </div>

              <ul className="tracks-container">
                {list}
              </ul>
            </div>

          <div className="webplayer-container">
            <WebPlayerContainer tracks={tracks} album={album} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AlbumShow;
