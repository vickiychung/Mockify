import React from 'react';
import ArtistsIndexContainer from '../artists/artists_index_container';
import AlbumsIndexContainer from '../albums/albums_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';

class Featured extends React.Component {

  render() {
    return (
      <div>
        <div className="artists-index">
          <ArtistsIndexContainer />
        </div>

        <div className="albums-index">
          <AlbumsIndexContainer />
        </div>

        <div className="playlists-index">
          <PlaylistsIndexContainer />
        </div>
      </div>
    );
  }
}

export default Featured;
