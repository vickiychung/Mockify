import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";

class AlbumShow extends React.Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render() {
    const { album, currentUser } = this.props;

    if (album) {
      return (
        <div>
          <p>{currentUser.username}</p>

          <img src={album.coverUrl} alt="album_cover"/>

          <p>ALBUM</p>

          <h1>{album.title}</h1>

          <p>{album.artistId}</p>

          <p>{album.year}</p>

          <p>#</p>
          <p>TITLE</p>
          <p>
            <FontAwesomeIcon icon={faClock}/>
          </p>
        
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AlbumShow;
