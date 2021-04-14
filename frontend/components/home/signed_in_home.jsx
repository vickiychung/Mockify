import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HeaderBarContainer from '../header_bar/header_bar_container';
import SideBar from '../side_bar/side_bar';
import ArtistsIndexContainer from '../artists/artists_index_container';
import AlbumsIndexContainer from '../albums/albums_index_container';
import AlbumShowContainer from '../albums/album_show_container';
import WebPlayerContainer from '../web_player/web_player_container';


class SignedInHome extends React.Component {
  render() {
    return (
      <div className="signed-in-home-container">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="header-bar-container">
          <HeaderBarContainer />
        </div>

        <div className="main-container">
          <div className="artists-index">
            <ArtistsIndexContainer />
          </div>

          <div className="albums-index">
            <AlbumsIndexContainer />
          </div>
        </div>

        {/* <div className="main-container">
          <Route path="/albums/:albumId" component={AlbumShowContainer}/>
        </div> */}

        <div className="webplayer-container">
          <WebPlayerContainer />
        </div>
      </div>
    );
  }
}

export default SignedInHome;
