import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import HomeContainer from './home/home_container';
import SignInFormContainer from './session/sign_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signin" component={SignInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route path="/" component={HomeContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
