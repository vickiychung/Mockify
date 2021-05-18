import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
      this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
    } 
  }

  handleDelete(trackId, playlistId) {
    this.props.removeTrackFromPlaylist(trackId, playlistId);
  }
  
  render() {
    const { playlist, tracks, albums } = this.props;
    let list, count, length = 0, hr, min, sec;

    if (tracks) {
      list = Object.values(tracks).map((track, idx) => (
        <li key={track.id} className="single-track-container">
          <p className="playlist-track-id">{idx + 1}</p>

          <img className="playlist-album-art" 
            src={albums[track.albumId]["coverUrl"]} 
            alt="album_cover" />

          <p className="playlist-track-name">{track.name}</p>

          <Link className="playlist-album-name link" 
            to={`/albums/${albums[track.albumId]["id"]}`}>
              {albums[track.albumId]["title"]}
          </Link>

          <Link className="playlist-artist-name link" 
            to={`/artists/${albums[track.albumId]["artistId"]}`}>
              {track.artistName}
          </Link>

          <p className="playlist-track-length">{track.length.toFixed(2)}</p>

          <p className="playlist-track-delete" 
            onClick={() => this.handleDelete(track.id, playlist.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
          </p>
        </li>
      ));

      count = Object.values(tracks).length;

      Object.values(tracks).forEach((track, i) => {
        length += track.length;
      })

      sec = (length % 1).toFixed(2) * 100;
      min = Math.floor(length);
      hr = Math.floor(min / 60);

      if (sec >= 60) {
        sec -= 60;
        min += 1;
      } else if (min >= 60) {
        min -= 60;
        hr += 1;
      }
    }

    if (!playlist) return null;
    
    return(
      <div className="signed-in-home-container">
        <div className="playlist-show-container">
          <div className="playlist-info">

            <div className="playlist-details">
              <p>PLAYLIST</p>
              <h1>{playlist.name}</h1>

            </div>
          </div>

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
    );
  }
}

export default PlaylistShow;
