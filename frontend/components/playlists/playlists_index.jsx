import React from 'react';
import PlaylistsIndexItem from './playlists_index_item';

class PlaylistsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }
  
  render() {
    const { playlists } = this.props;

    return (
      <div>
        <h1>Featured playlists</h1>

        <ul>
          {playlists.map(playlist => <PlaylistsIndexItem 
            key={playlist.id}
            playlist={playlist}
          />)}
        </ul>
      </div>
    );
  }
}

export default PlaylistsIndex;
