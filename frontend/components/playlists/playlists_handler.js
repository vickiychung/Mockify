import React from 'react';

class PlaylistsHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(trackId, playlistId) {
    this.props.addTrackToPlaylist(trackId, playlistId);
  }

  render() {
    const { playlists, trackId, options } = this.props;

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
        <li id="add">Add to Playlist</li>
        <ul className="track-dropdown-menu">
          {playlistsMenu}
        </ul>
      </ul>
    );
  }
}

export default PlaylistsHandler;
