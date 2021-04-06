import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ currentUser, signOut }) => {
  const signedIn = () => {
    return (
      <div>
        <h2>I am in signed in homepage</h2>
        <button onClick={signOut}>Log out</button>
      </div>
    );
  };

  const signedOut = () => {
    return (
      <div>
        <h2>I am in signed out homepage</h2>
        <Link to="/signin">Go to Sign In</Link>
      </div>
    );
  };

  return currentUser ? signedIn() : signedOut();
};

export default Home;