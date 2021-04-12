import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './splash';
import SignedInHome from './signed_in_home';

const Home = ({ currentUser, signOut }) => {
  const signedIn = () => {
    return (
      <SignedInHome />
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