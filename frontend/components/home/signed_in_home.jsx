import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import HeaderBarContainer from '../header_bar/header_bar_container';
import SideBarContainer from '../side_bar/side_bar_container';
import Featured from './featured';
import AlbumShowContainer from '../albums/album_show_container';
import ArtistShowContainer from '../artists/artist_show_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
// import PlaylistsLibraryContainer from '../playlists/playlists_library_container';
import WebPlayerContainer from '../web_player/web_player_container';

class SignedInHome extends React.Component {

  render() {
    return (
      <div className="signed-in-home-container">
        <div className="sidebar-container">
          <SideBarContainer />
        </div>

        <div className="header-bar-container">
          <HeaderBarContainer />
        </div>

        <div className="main-container">
          <Switch>
            <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
            <ProtectedRoute exact path="/artists/:artistId" component={ArtistShowContainer} />
            <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer} />
            {/* <ProtectedRoute exact path="/playlists" component={PlaylistsLibraryContainer} /> */}
            <Route exact path="/" component={Featured} />
            <Redirect to="/" />
          </Switch>
        </div>

        <div className="webplayer-container">
          <WebPlayerContainer />
        </div>
      </div>
    );
  }
}

export default SignedInHome;
