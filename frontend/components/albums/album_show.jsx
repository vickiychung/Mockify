import React from 'react';
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

    let artistName;
    
    if (album) {
      const list = tracks.map((track, idx) => <TracksIndexItem
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
                <p>{artistName}</p>
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
