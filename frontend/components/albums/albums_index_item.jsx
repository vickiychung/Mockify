import React from 'react';
import { Link } from 'react-router-dom';

class AlbumsIndexItem extends React.Component {
  
  render() {
    const { album } = this.props;

    return(
      <div>
        <li className="single-album-container">
          <Link to={`/albums/${album.id}`}>
            <img src={album.coverUrl} alt="album_cover"/>
          </Link>

          <Link className="link" to={`/albums/${album.id}`}>{album.title}</Link>
        
          <p>{album.year}</p>
        </li>
      </div>
    );
  }
}

export default AlbumsIndexItem;
