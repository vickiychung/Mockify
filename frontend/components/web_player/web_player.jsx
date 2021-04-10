import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle, 
  faPauseCircle,
  faStepForward,
  faStepBackward,
  faRandom,
  faRetweet
 } from "@fortawesome/free-solid-svg-icons";

class WebPlayer extends React.Component {
  constructor(props) {
    super(props);
    
    // local state for shuffling tracks
    this.state = { queue: [] };

    // class name var for css
    this.shuffling = "";
    this.looping = "";

    this.playPause = this.playPause.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.toggleLoop = this.toggleLoop.bind(this);
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
    
    // highlight shuffle icon
    if (!this.props.shuffleOn) {
      this.shuffling = "shuffle-on";
    } else {
      this.shuffling = "";
    }

    const _ = require("lodash");
    let _tracks = this.props.tracks;
    let shuffledTracks = _.shuffle(_tracks);
    this.setState({ queue: shuffledTracks });
  }

  toggleLoop(e) {
    e.preventDefault();
    this.props.toggleLoop();

    // highlight loop icon
    if (!this.props.loopOn) {
      this.looping = "loop-on";
    } else {
      this.looping = "";
    }
  }

  render() {
    const { currentTrack, playStatus } = this.props;

    // play first track on initial click
    let playPauseIcon = <FontAwesomeIcon icon={faPlayCircle} 
      onClick={this.playNext}/>

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

        <FontAwesomeIcon icon={faRandom} className={this.shuffling} 
          onClick={this.toggleShuffle}/>

        <FontAwesomeIcon icon={faStepBackward} onClick={this.playPrev}/>

        {playPauseIcon}

        <FontAwesomeIcon icon={faStepForward} onClick={this.playNext}/>

        <FontAwesomeIcon icon={faRetweet} className={this.looping} 
          onClick={this.toggleLoop} />

        <audio ref={ref => this.player = ref}>
          Your browser does not support the audio element.
        </audio>        
      </div>
    );
  }
}

export default WebPlayer;