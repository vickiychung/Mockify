import React from 'react';
import ArtistsIndexContainer from '../artists/artists_index_container';
import AlbumsIndexContainer from '../albums/albums_index_container';

class Main extends React.Component {

  render() {
    return (
      <div className="main-wrapper"> 
        <div className="main-body">
          <div className="artists-index">
            <ArtistsIndexContainer />
          </div>

          <div className="albums-index">
            <AlbumsIndexContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
