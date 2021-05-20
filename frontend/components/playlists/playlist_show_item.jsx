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
  
  render() {
    const { track, idx, togglePlayTrack, selectTrack, playlist } = this.props;

    const trackPlaybutton = <FontAwesomeIcon 
      className="track-button"
      icon={faPlayCircle}
      onClick={() => this.handlePlay(track.id)}
    />
  
    const trackIdButton = <button 
      className="track-button"
      onClick={() => this.handlePlay(track.id)}>
        {idx + 1}
    </button>

    return (
      <div>
        <li className="single-track-container" 
          onMouseEnter={this.handleHover("hovering")}
          onMouseLeave={this.handleHover("")}>
          
          {(this.state.hover === "hovering") ? trackPlaybutton : trackIdButton}

          <img className="playlist-album-art" 
            src={track.albumId.coverUrl} 
            alt="album_cover" />

          <p className="playlist-track-name">{track.name}</p>

          <Link className="playlist-album-name link" 
            to={`/albums/${track.albumId.id}`}>
              {track.albumId.title}
          </Link>

          <Link className="playlist-artist-name link" 
            to={`/artists/${track.albumId.artistId}`}>
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
