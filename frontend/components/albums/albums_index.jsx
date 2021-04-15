import React from 'react';
import AlbumsIndexItem from './albums_index_item';

class AlbumsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }
  
  render() {
    const { albums } = this.props;

    return (
      <div>
        <h1>Featured albums</h1>
        
        <ul className="albums-index-container">
          {albums.map(album => <AlbumsIndexItem 
            key={album.id}
            album={album}
          />)}
        </ul>
      </div>
    );
  }
}

export default AlbumsIndex;
