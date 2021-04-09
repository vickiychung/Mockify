import React from 'react';

class WebPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTrack !== prevProps.currentTrack) {
      let track = this.props.currentTrack;

      if (track) {
        if (this.props.playStatus === false) {
          this.props.togglePlayTrack();
        }

        this.player.src = track.trackUrl;
        this.player.play();
      }
    } else {
      console.log("hello");
    }
    // else {
    //   if (this.props.currentTrack) {
    //     this.props.togglePlayTrack();
    //     this.props.playStatus === true ? this.player.play() : this.player.pause();
    //   }
    // }
  }

  render() {
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