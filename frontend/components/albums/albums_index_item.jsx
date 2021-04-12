import React from 'react';
import { Link } from 'react-router-dom';

class AlbumsIndexItem extends React.Component {
  
  render() {
    const { album } = this.props;

    return(
      <div>
        <li>
          <img id="album-photo" src={album.coverUrl} alt="dangerous_cover"/>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </li>
      </div>
    );
  }
}

export default AlbumsIndexItem;
