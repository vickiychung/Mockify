import React from 'react';

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
      <h2>I am in signed out homepage</h2>
    );
  };

  return currentUser ? signedIn() : signedOut();
};

export default Home;