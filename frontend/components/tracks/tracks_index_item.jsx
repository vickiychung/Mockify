import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

class TracksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: "" }

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
    const { track, idx } = this.props;

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

          <p className="track-name">{track.name}</p>

          <p className="track-length">{track.length.toFixed(2)}</p>
        </li>
      </div>
    );
  }
}

export default TracksIndexItem;