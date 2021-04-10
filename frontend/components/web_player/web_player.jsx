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

    this.state = { queue: [] };

    this.playPause = this.playPause.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);

    this.toggleShuffle = this.toggleShuffle.bind(this);
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

    if (this.props.shuffleOn) {
      this.props.playNextTrack(this.state.queue);
    } else {
      this.props.playNextTrack(this.props.tracks);
    }
  }

  playPrev(e) {
    e.preventDefault();

    if (this.props.shuffleOn) {
      this.props.playPrevTrack(this.state.queue);
    } else {
      this.props.playPrevTrack(this.props.tracks);
    }
  }

  toggleShuffle(e) {
    e.preventDefault();
    this.props.toggleShuffle();

    const _ = require("lodash");
    let _tracks = this.props.tracks;
    // let _tracks = this.props.tracks.map(track => this.props.tracks.indexOf(track));

    let shuffledTracks = _.shuffle(_tracks);
    this.setState({ queue: shuffledTracks });
  }

  render() {
    const { tracks, currentTrack, playStatus, shuffleOn } = this.props;
  console.log(this.state);

    // if (tracks) {
    //   addToQueue(tracks);
    //   console.log(tracks);
    // }

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

        <button onClick={this.toggleShuffle}>shuffle</button>

        <audio ref={ref => this.player = ref}>
          Your browser does not support the audio element.
        </audio>        
      </div>
    );
  }
}

export default WebPlayer;