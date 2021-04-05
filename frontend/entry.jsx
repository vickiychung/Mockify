import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//TESTING
import { signUp, signIn, signOut } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  const store = configureStore();

  //TESTING
  window.signUp = signUp;
  window.signIn = signIn;
  window.signOut = signOut;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Hi I'm in the entry file</h1>, root);
});