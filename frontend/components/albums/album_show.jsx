import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import TracksIndexItem from '../tracks/tracks_index_item';

export class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render() {
    const {
      album,
      tracks,
      artists,
      togglePlayTrack,
      selectTrack
    } = this.props;

    let artistName, albumTracks;
    
    if (album) {
      
      albumTracks = tracks.filter(track => track.albumId === album.id);

      const list = albumTracks.map((track, idx) => <TracksIndexItem
        key={track.id}
        track={track}
        togglePlayTrack={togglePlayTrack}
        selectTrack={selectTrack}
        idx={idx}
      />);

      if (artists) {
        artistName = artists[album.artistId]["name"];
      }

      return (
        <div className="signed-in-home-container">
          <div className="album-info">
            <img src={album.coverUrl} alt="album_cover" />

            <div className="album-details">
              <p>ALBUM</p>
              <h1>{album.title}</h1>
              <span>
                <Link className="link" to={`artists/${album.artistId}`}>
                  <p id="artist-name" >{artistName}</p>
                </Link>
                <p>{`\u2022`}</p>
                <p>{album.year}</p>
              </span>
            </div>
          </div>

          <div className="tracks-header">
            <p>#</p>
            <p>TITLE</p>
            <p> <FontAwesomeIcon icon={faClock} /> </p>
          </div>

          <ul className="tracks-container">
            {list}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AlbumShow;
