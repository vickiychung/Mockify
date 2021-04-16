import React from 'react';

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
  }
  
  render() {
    const { currentUser, playlist, tracks } = this.props;

    if (!playlist) return null;
    
    return(
      <div className="signed-in-home-container">
        <div className="playlist-show-container">
          <p>
            {playlist.name}
          </p>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
