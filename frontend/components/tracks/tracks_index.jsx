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
      <div>
        <ul>
          {
            tracks.map(track => <TracksIndexItem 
              key = {track.id}
              track = {track}
            />)
          }
        </ul>
      </div>
    );
  }
}

export default TracksIndex;