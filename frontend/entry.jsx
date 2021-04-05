import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TESTING
import { signUp, signIn, signOut } from './actions/session_actions';
//TESTING

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  const store = configureStore();

  //TESTING
  window.signUp = signUp;
  window.signIn = signIn;
  window.signOut = signOut;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING

  ReactDOM.render(<Root store={store} />, root);
});