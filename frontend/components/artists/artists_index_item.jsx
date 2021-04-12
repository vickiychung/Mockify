import React from 'react';
import { Link } from 'react-router-dom';

class ArtistsIndexItem extends React.Component {

  render() {
    const { artist } = this.props;
    return(
      <div>
        <li>
          <img id="artist-photo" src={artist.photoUrl} alt="artist-photo"/>
          <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
        </li>
      </div>
    )
  }
}

export default ArtistsIndexItem;
