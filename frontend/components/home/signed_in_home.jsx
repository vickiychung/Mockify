import React from 'react';
import { Link } from 'react-router-dom';

class SignedInHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, signOut } = this.props;

    return (
      <div>
        <h2>I am in signed in homepage</h2>
        <p>{currentUser.username}</p>
        <Link to="/artists">go to artists index</Link>
        <br />
        <Link to="/albums">go to albums index</Link>
        <button onClick={signOut}>Log out</button>
      </div>
    );
  }
}

export default SignedInHome;