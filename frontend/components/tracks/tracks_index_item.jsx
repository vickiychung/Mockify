import React from 'react';

class TracksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(trackId) {
    this.props.togglePlayTrack();
    this.props.selectTrack(trackId);
  }

  render() {
    const { track } = this.props;
    
    return (
      <div>
        <li className="single-track-container">
          <p className="track-name">{track.name}</p>
          <p className="track-length">{track.length.toFixed(2)}</p>
          <button onClick={() => this.handlePlay(track.id)}>Play</button>
        </li>
      </div>
    );
  }
}

export default TracksIndexItem;