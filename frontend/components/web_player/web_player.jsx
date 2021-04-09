import React from 'react';

class WebPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTrack !== prevProps.currentTrack) {
      let track = this.props.currentTrack;

      if (track) {
        this.player.src = track.trackUrl;
        this.player.play();
      };
    }
  }

  render() {
    return (
      <div>
        <p>this is web player</p>
        <audio ref={ref => this.player = ref} controls/>        
      </div>
    );
  }
}

export default WebPlayer;