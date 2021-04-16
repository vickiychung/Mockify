import React from 'react';
import PlaylistsIndexItem from './playlists_index_item';

class PlaylistsIndex extends React.Component {

  render() {
    const { playlists, component } = this.props;

    let list, header;

    if (playlists) {
      
      list = playlists.map(playlist => <PlaylistsIndexItem
        key={playlist.id}
        playlist={playlist}
      />);
    }

    if (component !== "sidebar") {
      header = <h1>Featured playlists</h1>;
    } else {
      header = null;
    }

    return (
      <div>
        {header}

        <ul className="sidebar-playlist-wrapper">
          {list}
        </ul>
      </div>
    );
  }
}

export default PlaylistsIndex;
