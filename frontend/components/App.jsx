import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HomeContainer from './home/home_container';
import SignInFormContainer from './session/sign_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import AlbumsIndexContainer from './albums/albums_index_container';
import AlbumShowContainer from './albums/album_show_container';
import ArtistsIndexContainer from './artists/artists_index_container';
import ArtistShowContainer from './artists/artist_show_container';

import TracksIndexContainer from './tracks/tracks_index_container';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signin" component={SignInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />

        <ProtectedRoute exact path="/tracks" component={TracksIndexContainer} />
        
        <ProtectedRoute exact path="/albums" component={AlbumsIndexContainer} />
        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
        <ProtectedRoute exact path="/artists" component={ArtistsIndexContainer} />
        <ProtectedRoute exact path="/artists/:artistId" component={ArtistShowContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;