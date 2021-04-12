import React from 'react';
import Splash from './splash';
import SignedInHome from './signed_in_home';

const Home = ({ currentUser, signOut }) => {
  const signedIn = () => {
    return (
      <SignedInHome currentUser={currentUser} signOut={signOut} />
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