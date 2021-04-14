import React from 'react';
import AlbumsIndexItem from '../albums/albums_index_item';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  render() {
    const { artist, albums } = this.props;
    
    if (artist) {
      const list = albums.map(album => <AlbumsIndexItem
        key={album.id}
        album={album}
      />)
      
      return (
        <div className="signed-in-home-container">
          <div className="artist-info">
            <img src={artist.photoUrl} alt="artist_photo" />

            <div className="artist-details">
              <h1>{artist.name}</h1>
              <p>{artist.description}</p>
            </div>
          </div>

          <ul className="albums-container">
            {list}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ArtistShow;
