import React from 'react';
import PlaylistsLibraryItem from './playlists_library_item';

class PlaylistsLibrary extends React.Component {

  render() {
    const { playlists } = this.props;

    let list;

    if (playlists) {
      list = playlists.map(playlist => <PlaylistsLibraryItem
        key={playlist.id}
        playlist={playlist}
      />);
    }

    return (
      <div>
        <h1>Featured playlists</h1>

        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default PlaylistsLibrary;
