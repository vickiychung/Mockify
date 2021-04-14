import React from 'react';
// import SideBar from '../side_bar/side_bar';
// import HeaderBarContainer from '../header_bar/header_bar_container';
// import WebPlayerContainer from '../web_player/web_player_container';
import AlbumsIndexItem from '../albums/albums_index_item';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  render() {
    const { artist, albums } = this.props;
    
    if (artist) {
      const list = albums.map(album => <AlbumsIndexItem
        key={album.id}
        album={album}
      />)
      
      return (
        <div className="signed-in-home-container">
           {/* <div className="sidebar-container">
             <SideBar />
           </div>

           <div className="header-bar-container">
             <HeaderBarContainer />
           </div> */}

          <div className="main-container">
            <div className="artist-info">
              <img src={artist.photoUrl} alt="artist_photo" />

              <div className="artist-details">
                <h1>{artist.name}</h1>
                <p>{artist.description}</p>
              </div>
            </div>

            <ul className="albums-container">
              {list}
            </ul>
          </div>

          {/* <div className="webplayer-container">
            <WebPlayerContainer />
          </div> */}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ArtistShow;
