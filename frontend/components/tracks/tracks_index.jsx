import React from 'react';
import TracksIndexItem from './tracks_index_item';

class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }
  
  render() {
    const { tracks } = this.props;
    
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
            </div>

            <ul className="tracks-container">
              {tracks.map(track => <TracksIndexItem 
                  key = {track.id}
                  track = {track}
                  trackUrl = {track.trackUrl}
                />)}
            </ul>
          </div>
          <br/>

        </div>

        <div className="webplayer-container">
          <p>I will be webplayer</p>
          <br/>
          <p>thank you walker!</p>
        </div>
      </div>
    );
  }
}

export default TracksIndex;