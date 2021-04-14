import React from 'react';
import { Link } from 'react-router-dom';

class AlbumsIndexItem extends React.Component {
  
  render() {
    const { album } = this.props;

    return(
      <div>
        <li className="single-album-container">
          <Link to={`/albums/${album.id}`}>
            <img id="album-photo" src={album.coverUrl} alt="dangerous_cover"/>
          </Link>

          <Link className="link" to={`/albums/${album.id}`}>{album.title}</Link>
        
          <p>{album.year}</p>
        </li>
      </div>
    );
  }
}

export default AlbumsIndexItem;
