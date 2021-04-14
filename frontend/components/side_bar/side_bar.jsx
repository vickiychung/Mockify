import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img id="sidebar-logo" src={window.logoDarkURL} alt="mockify_logo"/>
        </Link>
      </div>
    );
  }
}

export default SideBar;
