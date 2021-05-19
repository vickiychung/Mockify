import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTrashAlt, faMusic } from "@fortawesome/free-solid-svg-icons";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
      this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
    } 
  }

  handleDelete(trackId, playlistId) {
    this.props.removeTrackFromPlaylist(trackId, playlistId);
  }
  
  render() {
    const { playlist, tracks, albums } = this.props;
    let list, count, length = 0, hr, min, sec;

    if (tracks) {
      list = Object.values(tracks).map((track, idx) => (
        <li key={track.id} className="single-track-container">
          <p className="playlist-track-id">{idx + 1}</p>

          <img className="playlist-album-art" 
            src={albums[track.albumId]["coverUrl"]} 
            alt="album_cover" />

          <p className="playlist-track-name">{track.name}</p>

          <Link className="playlist-album-name link" 
            to={`/albums/${albums[track.albumId]["id"]}`}>
              {albums[track.albumId]["title"]}
          </Link>

          <Link className="playlist-artist-name link" 
            to={`/artists/${albums[track.albumId]["artistId"]}`}>
              {track.artistName}
          </Link>

          <p className="playlist-track-length">{track.length.toFixed(2)}</p>

          <p className="playlist-track-delete" 
            onClick={() => this.handleDelete(track.id, playlist.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
          </p>
        </li>
      ));

      count = Object.values(tracks).length;

      Object.values(tracks).forEach((track, i) => {
        length += track.length;
      })

      sec = Math.round((length % 1).toFixed(2) * 100);

      if (sec >= 60) {
        sec -= 60;
        min = Math.floor(length) + 1;
      } else {
        min = Math.floor(length);
      }
      
      if (min >= 60) {
        min -= 60;
        hr = Math.floor(min / 60) + 1;
      } else {
        hr = Math.floor(min / 60);
      }
    }

    if (!playlist) return null;
    
    return (
      <div className="signed-in-home-container">
        <div className="playlist-show-container">
          <div className="playlist-info">
            <div className="playlist-art">
              {Object.values(albums).length < 4 ?
                <FontAwesomeIcon id="playlist-default" icon={faMusic} /> :
                <ul>
                  {Object.values(albums).slice(0, 4).map(
                    (album, i) => <li key={i}><img src={album.coverUrl}/></li>)}
                </ul>
              }
            </div>

            <div className="playlist-details">
              <p>PLAYLIST</p>
              <h1>{playlist.name}</h1>
              <span>
                <p>{`${count} songs`}</p>
                <p>{`\u2022`}</p>
                {hr === 0 ?  
                  <p>{`${min} min ${sec} sec`}</p> : 
                  <p>{`${hr} hr ${min} min ${sec} sec`}</p>
                }
              </span>
            </div>
          </div>

          <div className="playlist-tracks-header">
            <p>#</p>
            <p>TITLE</p>
            <p>ALBUM</p>
            <p>ARTIST</p>
            <p> <FontAwesomeIcon icon={faClock} /> </p>
          </div>

          <ul className="tracks-container">
            {list}
          </ul>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
