import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

class WebPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.playNext = this.playNext.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTrack !== prevProps.currentTrack) {

      if (this.props.currentTrack) {
        if (this.props.playStatus === false) {
          this.props.togglePlayTrack();
        }
      } else {
        this.player.pause();
      }
    } 
  }

  playNext(e) {
    e.preventDefault();
    this.props.playNextTrack(this.props.queue);
  }

  render() {
    const { currentTrack, playStatus } = this.props;

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

        <button onClick={this.playNext}>next</button>

        <audio ref={ref => this.player = ref}>
          Your browser does not support the audio element.
        </audio>        
      </div>
    );
  }
}

export default WebPlayer;