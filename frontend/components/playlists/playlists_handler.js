import React from 'react';

class PlaylistsHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(trackId, playlistId) {
    return (e => {
      e.preventDefault();
      this.props.addTrackToPlaylist(trackId, playlistId);
    });
  }

  render() {
    const { playlists, trackId, removeTrackFromPlaylist, options } = this.props;
    
    let playlistsMenu;

    if (playlists) {
      playlistsMenu = playlists.map(playlist => (
        <li
          key={playlist.id}
          onClick={() => this.handleAdd(trackId, playlist.id)}>
            {playlist.name}
        </li>
      ));
    }

    return(
      <ul className={`track-dropdown ${options}`}>
        <li>Add to Playlist</li>
        <ul>{playlistsMenu}</ul>
      </ul>
    );
  }
}

export default PlaylistsHandler;
