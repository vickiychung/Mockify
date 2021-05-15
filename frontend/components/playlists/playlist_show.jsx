import React from 'react';

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
      this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
    } 
  }
  
  render() {
    const { currentUser, playlist, tracks } = this.props;
    let list;

    if (tracks) {
      list = Object.values(tracks).map(track => (
        <li key={track.id}>
          {track.name}
        </li>
      ))
    }

    if (!playlist) return null;
    
    return(
      <div className="signed-in-home-container">
        <div className="playlist-show-container">
          <h1>{playlist.name}</h1>

          <ul className="playlist-listing" type="1">
            {list}
          </ul>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
