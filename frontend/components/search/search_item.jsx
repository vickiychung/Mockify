import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

class SearchItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: "" };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handlePlay(track) {
    this.props.togglePlayTrack();
    this.props.selectTrack(track);
  }

  handleHover(value) {
    return (e => {
      e.preventDefault();
      this.setState({ hover: value });
    });
  }

  render() {
    const { track, idx, albums, artists } = this.props;

    const trackPlaybutton = <FontAwesomeIcon 
      className="track-button"
      icon={faPlayCircle}
      onClick={() => this.handlePlay(track)}
    />
  
    const trackIdButton = <button 
      className="track-button"
      onClick={() => this.handlePlay(track)}>
        {idx + 1}
    </button>

    return (
      <div>
        <li className="single-track-container"
          onMouseEnter={this.handleHover("hovering")}
          onMouseLeave={this.handleHover("")}>
          
          {(this.state.hover === "hovering") ? trackPlaybutton : trackIdButton}

          <img className="search-album-art" 
            src={albums[track.albumId]["coverUrl"]} 
            alt="album_cover" 
          />
          
        </li>
      </div>
    )
  }
}

export default SearchItem;
