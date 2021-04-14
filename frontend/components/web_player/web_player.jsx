import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle, 
  faPauseCircle,
  faStepForward,
  faStepBackward,
  faRandom,
  faRetweet,
  faVolumeUp
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
    this.handleProgress = this.handleProgress.bind(this);
    this.handleSeekBar = this.handleSeekBar.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  // componentDidMount() {
    // if (this.player) {
    //   this.handleProgress();
    // }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTrack !== prevProps.currentTrack) {
      if (this.props.currentTrack) {
        if (this.props.playStatus === false) {
          this.props.togglePlayTrack();
        } else {
          // this.player.src = this.props.currentTrack.trackUrl;
          this.player.play();
        }
      }
    } 
    else if (this.props.currentTrack === prevProps.currentTrack) {
      if (this.props.currentTrack) {
        if (this.props.playStatus === false) {
          this.player.pause();
        } else {
          this.player.play();
        }
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

  handleProgress() {
    let player = document.getElementById("player");
    let seekBar = document.getElementById("seekBar");
    let endTime = document.getElementById('endTime')
    let startTime = document.getElementById('startTime')
    // debugger
    player.addEventListener("loadeddata", () => {
      this.duration = player.duration;
console.log("loaded");
      seekBar.max = this.duration;

      let durationMin = Math.floor(this.duration / 60);
      let durationSec = Math.round(this.duration - (durationMin * 60));

      if (durationSec < 10) {
        endTime.innerHTML = `${durationMin}:0${durationSec}`;
      } else {
        endTime.innerHTML = `${durationMin}:${durationSec}`;
      }
    })

    player.addEventListener("timeupdate", () => {
  console.log("timeupdate");
      let currentTime = player.currentTime;
      let currentMin = Math.floor(currentTime / 60);
      let currentSec = Math.round(currentTime - (currentMin * 60));

      if (currentSec < 10) {
        startTime.innerHTML = `${currentMin}:0${currentSec}`;
      } else {
        startTime.innerHTML = `${currentMin}:${currentSec}`;
      }
      seekBar.value = (currentTime / this.duration) * 100;
    })
  }

  handleSeekBar(e) {
    this.player.currentTime = e.target.value;
  }

  handleVolume(e) {
    this.player.volume = e.target.value;
  }

  render() {
    const { currentTrack, playStatus, album } = this.props;

    // if (!currentTrack) return null;

    const player = document.getElementById("player");
    let currentTrackName;

    // play first track on initial click
    let playPauseIcon = <FontAwesomeIcon icon={faPlayCircle} 
      onClick={this.playNext}/>
    
    // set up player
    if (currentTrack) {
      if (player.src !== currentTrack.trackUrl) {
        player.src = currentTrack.trackUrl;
      }

      currentTrackName = currentTrack.name;
      
      if (playStatus === true) {
        playPauseIcon = <FontAwesomeIcon icon={faPauseCircle} onClick={this.playPause}/>
        // player.play();
      } else {
        playPauseIcon = <FontAwesomeIcon icon={faPlayCircle} onClick={this.playPause}/>
        // player.pause();
      }

      if (player) {
        this.handleProgress();
      }
    } 

    return (
      <div className="webplayer-wrapper">

        <div className="webplayer-info">
          <div className="webplayer-album">
            {album ? <img src={album.coverUrl} alt="album_cover" /> : null}
          </div>

          <div className="webplayer-details">
            <div className="webplayer-track-name">
              {currentTrackName}
            </div>

            <div className="webplayer-artist">
              <p>{currentTrack ? currentTrack.artistName : ""}</p>
            </div>
          </div>
        </div>

        <div className="controls-container">
          <div className="buttons-container">
            <div className="control-buttons-left">
              <p>
                <FontAwesomeIcon icon={faRandom} className={this.shuffling} 
                  onClick={this.toggleShuffle}/>
              </p>

              <p>
                <FontAwesomeIcon icon={faStepBackward} onClick={this.playPrev} />
              </p>
            </div>

            <div className="play-pause-button">
              {playPauseIcon}
            </div>

            <div className="control-buttons-right">
              <p>
                <FontAwesomeIcon icon={faStepForward} onClick={this.playNext} />
              </p>

              <p>
                <FontAwesomeIcon icon={faRetweet} className={this.looping}
                  onClick={this.toggleLoop} />
              </p>
            </div>
          </div>

          <div className="seekbar-container">
            <p id='startTime'>0:00</p>

            <input id="seekBar" type="range" min="0" max="100" defaultValue="0" 
              onChange={this.handleSeekBar}>
            </input>

            <p id='endTime'></p>
          </div>
        </div>

        <div className="volume-container">
          <p>
            <FontAwesomeIcon icon={faVolumeUp} />
          </p>

          <input type="range" min="0" max="1" step=".01" 
            defaultValue={this.player ? this.player.volume : 0.3} 
            onChange={e => this.handleVolume(e)}>
          </input>
        </div>

        <audio 
        // key={currentTrack ? currentTrack.id : null} 
          id="player" 
          ref={ref => this.player = ref} 
          // src={currentTrack ? currentTrack.trackUrl : ""}
          >
          Your browser does not support the audio element.
        </audio>      
      </div>
    );
  }
}

export default WebPlayer;