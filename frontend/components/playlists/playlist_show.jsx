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
    const { currentUser, playlist, tracks, albums } = this.props;
    let list;

    if (tracks) {
      list = Object.values(tracks).map(track => (
        <li key={track.id}>
          <p className="track-name">{track.name}</p>
          {/* <p>{albums[track.albumId]}</p> */}
          <p>{track.artistName}</p>
          <p className="track-length">{track.length.toFixed(2)}</p>
        </li>
      ));
    }

    if (!playlist) return null;
    
    return(
      <div className="signed-in-home-container">
        <div className="playlist-show-container">
          <h1>{playlist.name}</h1>

          <ol className="playlist-listing" type="1">
            {list}
          </ol>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
