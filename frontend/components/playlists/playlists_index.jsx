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
      <div>
        <h1>Featured playlists</h1>

        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default PlaylistsIndex;
