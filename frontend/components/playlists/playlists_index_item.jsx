import React from 'react';

class PlaylistsIndexItem extends React.Component {

  render() {
    const { playlist } = this.props;

    return (
      <div>
        <li>
          <p>{playlist.name}</p>
        </li>
      </div>
    );
  }
}

export default PlaylistsIndexItem;
