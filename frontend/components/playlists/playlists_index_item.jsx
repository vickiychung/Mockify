import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistsIndexItem extends React.Component {

  render() {
    const { playlist } = this.props;

    return (
      <li>
        <Link className="link" to={`/playlists/${playlist.id}`}>
          <p>{playlist.name}</p>
        </Link>
      </li>
    );
  }
}

export default PlaylistsIndexItem;
