import React from 'react';

class AlbumsIndexItem extends React.Component {
  
  render() {
    const { album } = this.props;

    return(
      <div>
        <li>
          <img src={album.coverUrl} alt="dangerous_cover"/>
          <p>{album.title}</p>
        </li>
      </div>
    );
  }
}

export default AlbumsIndexItem;
