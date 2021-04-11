import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HomeContainer from './home/home_container';
import SignInFormContainer from './session/sign_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';

// maybe temp
import TracksIndexContainer from './tracks/tracks_index_container';
// maybe temp

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signin" component={SignInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/tracks" component={TracksIndexContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;