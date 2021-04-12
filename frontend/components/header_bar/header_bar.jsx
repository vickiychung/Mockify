import React from 'react';

class HeaderBar extends React.Component {

  render() {
    const { currentUser, signOut } = this.props;

    return (
      <div>
        <p>{currentUser.username}</p>
        <button onClick={signOut}>Log out</button>
      </div>
    );
  }
}

export default HeaderBar;
