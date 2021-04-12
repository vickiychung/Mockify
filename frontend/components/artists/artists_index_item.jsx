import React from 'react';
import { Link } from 'react-router-dom';

class ArtistsIndexItem extends React.Component {

  render() {
    const { artist } = this.props;
    return(
      <div>
        <li>
          <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
          <img src={artist.photoUrl} alt="artist-photo"/>
        </li>
      </div>
    )
  }
}

export default ArtistsIndexItem;
