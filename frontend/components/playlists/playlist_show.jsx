import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
      this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
      this.props.fetchPlaylist(this.props.match.params.playlistId);

    } 
  }
  
  render() {
    const { playlist, tracks, albums } = this.props;
    let list;

    if (tracks) {
      list = Object.values(tracks).map((track, idx) => (
        <li key={track.id} className="single-track-container">
          <p className="playlist-track-id">{idx + 1}</p>
          <p className="playlist-track-name">{track.name}</p>
          <p className="playlist-album-name">{albums[track.albumId]["title"]}</p>
          <p className="playlist-artist-name">{track.artistName}</p>
          <p className="playlist-track-length">{track.length.toFixed(2)}</p>
        </li>
      ));
    }

    if (!playlist) return null;
    
    return(
      <div className="signed-in-home-container">
        <div className="playlist-show-container">
          <h1>{playlist.name}</h1>

          <div className="playlist-tracks-wrapper">
            <div className="playlist-tracks-header">
              <p>#</p>
              <p>TITLE</p>
              <p>ALBUM</p>
              <p>ARTIST</p>
              <p> <FontAwesomeIcon icon={faClock} /> </p>
            </div>

            <ul className="tracks-container">
              {list}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
