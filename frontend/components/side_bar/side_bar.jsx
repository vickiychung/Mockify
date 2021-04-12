import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    const { currentUser, signOut } = this.props;

    return (
      <div>
        <p>{currentUser.username}</p>
        <Link to="/artists">go to artists index</Link>
        <br />
        <Link to="/albums">go to albums index</Link>
        <button onClick={signOut}>Log out</button>
      </div>
    );
  }
}

export default SideBar;
