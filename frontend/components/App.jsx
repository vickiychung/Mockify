import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './home/home_container';
import SignInFormContainer from '../components/session/sign_in_form_container';
import SignUpFormContainer from '../components/session/sign_up_form_container';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/signin" component={SignInFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
};

export default App;