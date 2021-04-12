import React from 'react';
import { Link } from 'react-router-dom';

const SignedInHome = ({ signOut }) => {
  return (
    <div>
      <h2>I am in signed in homepage</h2>
      <Link to="/artists">go to artists index</Link>
      <br />
      <Link to="/albums">go to albums index</Link>
      <button onClick={signOut}>Log out</button>
    </div>
  );
}

export default SignedInHome;