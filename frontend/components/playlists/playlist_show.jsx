import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTrashAlt, faMusic } from "@fortawesome/free-solid-svg-icons";
import PlaylistShowItem from './playlist_show_item';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: ""};

    this.editPlaylist = this.editPlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
      this.props.fetchPlaylistPayload(this.props.match.params.playlistId);
      this.setState({ name: this.props.playlist.name });
    } 
  }

  editPlaylist(e) {
    let updatedPlaylist = Object.assign({}, this.props.playlist);
    updatedPlaylist.name = e.target.value;
    this.setState({ name: updatedPlaylist.name });
    this.props.updatePlaylist(updatedPlaylist);
  }

  deletePlaylist(playlistId) {
    this.props.deletePlaylist(playlistId);
  }
  
  render() {
    const { playlist, tracks, albums, togglePlayTrack, selectTrack, removeTrackFromPlaylist } = this.props;

    let list, count, length = 0, hr, min, sec;

    if (tracks) {
      list = Object.values(tracks).map((track, idx) => <PlaylistShowItem 
        key={track.id}
        track={track}
        togglePlayTrack={togglePlayTrack}
        selectTrack={selectTrack}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        idx={idx}
        playlist={playlist}
        albums={albums}
      />);

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
              <span>
                <p>PLAYLIST</p>
                <p onClick={() => this.deletePlaylist(playlist.id)}>
                  <FontAwesomeIcon id="delete-playlist" icon={faTrashAlt} />
                </p>
              </span>

              <input type="text" 
                value={this.state.name === "" ? playlist.name : this.state.name} 
                onChange={this.editPlaylist}
              />

              <span>
                <p>{`${count} songs`}</p>
                <p>{`\u2022`}</p>
                {
                  hr === 0 ?  
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
