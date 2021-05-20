import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class PlaylistShowItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", hover: "" };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handlePlay(trackId) {
    this.props.togglePlayTrack();
    this.props.selectTrack(trackId);
  }

  handleHover(value) {
    return (e => {
      e.preventDefault();
      this.setState({ hover: value });
    });
  }

  handleDelete(trackId, playlistId) {
    this.props.removeTrackFromPlaylist(trackId, playlistId);
  }
  
  render() {
    const { track, idx, playlist, albums } = this.props;

    const trackPlaybutton = <FontAwesomeIcon 
      className="track-button"
      id="playlist-track-button"
      icon={faPlayCircle}
      onClick={() => this.handlePlay(track.id)}
    />
  
    const trackIdButton = <button 
      className="track-button"
      id="playlist-track-button"
      onClick={() => this.handlePlay(track.id)}>
        {idx + 1}
    </button>

    return (
      <div>
        <li className="single-track-container" 
          id="playlist-track-container"
          onMouseEnter={this.handleHover("hovering")}
          onMouseLeave={this.handleHover("")}>
          
          {(this.state.hover === "hovering") ? trackPlaybutton : trackIdButton}

          <img className="playlist-album-art" 
            src={track.coverUrl} 
            alt="album_cover" />

          <p className="playlist-track-name">{track.name}</p>

          <Link className="playlist-album-name link" 
            to={`/albums/${track.albumId}`}>
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
      </div>
    );
  }
}

export default PlaylistShowItem;
