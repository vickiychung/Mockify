import React from 'react';
import ReactDOM from 'react-dom';

import { signUp, signIn, signOut } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");

  window.signUp = signUp;
  window.signIn = signIn;
  window.signOut = signOut;

  ReactDOM.render(<h1>Hi I'm in the entry file</h1>, root);
});