import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <img id="sidebar-logo" src={window.logoDarkURL} alt="mockify_logo"/>
      </div>
    );
  }
}

export default SideBar;
