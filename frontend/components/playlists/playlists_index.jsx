import React from 'react';
import PlaylistsIndexItem from './playlists_index_item';

class PlaylistsIndex extends React.Component {

  render() {
    const { playlists } = this.props;

    let list;

    if (playlists) {
      list = playlists.map(playlist => <PlaylistsIndexItem
        key={playlist.id}
        playlist={playlist}
      />);
    }

    return (
      <ul className="sidebar-playlist-wrapper">
        {list}
      </ul>
    );
  }
}

export default PlaylistsIndex;
