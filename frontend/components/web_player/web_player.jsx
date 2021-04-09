import React from 'react';

class WebPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTrack !== prevProps.currentTrack) {

      if (this.props.currentTrack) {
        if (this.props.playStatus === false) {
          this.props.togglePlayTrack();
        }
      }
    } 
  }

  render() {
    const { currentTrack, playStatus } = this.props;
    
    if (currentTrack) {
      this.player.src = currentTrack.trackUrl;
      playStatus === true ? this.player.play() : this.player.pause();
    }

    return (
      <div>
        <p>this is web player</p>

        <audio ref={ref => this.player = ref} controls>
          Your browser does not support the audio element.
        </audio>        
      </div>
    );
  }
}

export default WebPlayer;