import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

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
    const { currentTrack, playStatus, queue } = this.props;

    let playPauseIcon = <FontAwesomeIcon icon={faPlayCircle} />

    if (currentTrack) {
      this.player.src = currentTrack.trackUrl;
      
      if (playStatus === true) {
        playPauseIcon = <FontAwesomeIcon icon={faPauseCircle} />
        this.player.play();
      } else {
        playPauseIcon = <FontAwesomeIcon icon={faPlayCircle} />
        this.player.pause();
      }
    }

    return (
      <div>
        <p>this is web player</p>

        {playPauseIcon}

        <audio ref={ref => this.player = ref}>
          Your browser does not support the audio element.
        </audio>        
      </div>
    );
  }
}

export default WebPlayer;