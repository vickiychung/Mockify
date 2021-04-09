import React from 'react';
import { Link } from 'react-router-dom';
import TracksIndexItem from './tracks_index_item';
import WebPlayer from '../web_player/web_player';

class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }
  
  render() {
    const { tracks, currentTrackId, status } = this.props;
    
    return (
      <div className="home-wrapper">
        <div className="home-container">
          <div className="sidebar-container">
            <p>Sidebarrrr</p>
          </div>

          <div className="main-container">
            <div className="album-photo">
              <p>album photo can be here</p>
              <p>how do I have background color adjusts with the photo accordingly?</p>
              <Link to="/">temporary link to go back to home</Link>
            </div>

            <ul className="tracks-container">
              {tracks.map(track => <TracksIndexItem 
                  key = {track.id}
                  track = {track}
                  trackUrl = {track.trackUrl}
                  currentTrackId = {currentTrackId}
                  status = {status}
                />)}
            </ul>
          </div>
          <br/>

        </div>

        <div className="webplayer-container">
          <WebPlayer />
        </div>
      </div>
    );
  }
}

export default TracksIndex;