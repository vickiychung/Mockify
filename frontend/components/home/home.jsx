import React from 'react';
import Splash from './splash';
import { Link } from 'react-router-dom';

const Home = ({ currentUser, signOut }) => {
  const signedIn = () => {
    return (
      <div>
        <h2>I am in signed in homepage</h2>
        <Link to="/tracks">go to temporary tracks page</Link>
        <button onClick={signOut}>Log out</button>
      </div>
    );
  };

  const signedOut = () => {
    return (
      <Splash />
    );
  };

  return currentUser ? signedIn() : signedOut();
};

export default Home;