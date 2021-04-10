import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle, 
  faPauseCircle,
  faStepForward,
  faStepBackward
 } from "@fortawesome/free-solid-svg-icons";

class WebPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.playPause = this.playPause.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);
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

  playPause(e) {
    e.preventDefault();
    this.props.togglePlayTrack();
  }

  playNext(e) {
    e.preventDefault();
    this.props.playNextTrack(this.props.queue);
  }

  playPrev(e) {
    e.preventDefault();
    this.props.playPrevTrack(this.props.queue);
  }

  render() {
    const { currentTrack, playStatus } = this.props;

    // play first track on initial click
    let playPauseIcon = <FontAwesomeIcon icon={faPlayCircle} onClick={this.playNext}/>

    if (currentTrack) {
      this.player.src = currentTrack.trackUrl;
      
      if (playStatus === true) {
        playPauseIcon = <FontAwesomeIcon icon={faPauseCircle} onClick={this.playPause}/>
        this.player.play();
      } else {
        playPauseIcon = <FontAwesomeIcon icon={faPlayCircle} onClick={this.playPause}/>
        this.player.pause();
      }
    } 

    return (
      <div>
        <p>this is web player</p>

        <FontAwesomeIcon icon={faStepBackward} onClick={this.playPrev}/>

        {playPauseIcon}

        <FontAwesomeIcon icon={faStepForward} onClick={this.playNext}/>

        <audio ref={ref => this.player = ref}>
          Your browser does not support the audio element.
        </audio>        
      </div>
    );
  }
}

export default WebPlayer;