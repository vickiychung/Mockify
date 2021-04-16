import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { addTrackToPlaylist, removeTrackFromPlaylist } from '../../actions/playlists_actions';
import PlaylistsHandler from '../playlists/playlists_handler';

class TracksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: "", options: "hidden" }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
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

  toggleDropdown() {
    if (this.state.options === "hidden") {
      this.setState({ options: "show" });
    } else {
      this.setState({ options: "hidden" });
    }
  }

  render() {
    const { track, idx, playlists, 
      addTrackToPlaylist, removeTrackFromPlaylist } = this.props;

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

          <div className="track-options-container">
            <FontAwesomeIcon 
              className="track-options" 
              icon={faEllipsisH} 
              onClick={this.toggleDropdown}
            />

            <PlaylistsHandler
              playlists={playlists}
              trackId={track.id}
              addTrackToPlaylist={addTrackToPlaylist}
              removeTrackFromPlaylist={removeTrackFromPlaylist}
              options={this.state.options}
            />
          </div>
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playlists: Object.values(state.entities.playlists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTrackToPlaylist: (trackId, playlistId) => dispatch(
      addTrackToPlaylist(trackId, playlistId)),
    removeTrackFromPlaylist: (trackId, playlistId) => dispatch(
      removeTrackFromPlaylist(trackId, playlistId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndexItem);
