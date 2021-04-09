import React from 'react';

class TracksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentTrackId: null,
    //   status: false
    // };

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(trackId) {
    // e.preventDefault();
    this.props.togglePlayTrack();
    this.props.selectTrack(trackId);
  }

  render() {
    const { track, trackUrl, currentTrackId, status, togglePlayTrack } = this.props;
    
    return (
      <div>
        <li className="single-track-container">
          <p className="track-name">{track.name}</p>
          <p className="track-length">{track.length.toFixed(2)}</p>
          <button onClick={() => this.handlePlay(track.id)}>Play</button>
          <audio src={trackUrl} controls>
            Your browser does not support the audio element.
          </audio>
        </li>
      </div>
    );
  }
}

// const TracksIndexItem = ({ track, trackUrl }) => {
//   return (
    // <div>
    //   <li className="single-track-container" onClick={() => alert("click")}>
    //     <p className="track-name">{track.name}</p>
    //     <p className="track-length">{track.length.toFixed(2)}</p>
    //     <audio src={trackUrl} controls>
    //       Your browser does not support the audio element.
    //     </audio>
    //   </li>
    // </div>
//   );
// };

export default TracksIndexItem;