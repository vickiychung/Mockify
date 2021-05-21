import React from 'react';
import PlaylistsFeaturedItem from './playlists_featured_item';

class PlaylistsFeatured extends React.Component {

  render() {
    const { playlists } = this.props;

    let list;

    if (playlists) {
      list = playlists.map(playlist => <PlaylistsFeaturedItem
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

export default PlaylistsFeatured;
