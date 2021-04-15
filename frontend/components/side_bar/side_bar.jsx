import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen } from "@fortawesome/free-solid-svg-icons";

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img id="sidebar-logo" src={window.logoDarkURL} alt="mockify_logo"/>
        </Link>

        <div className="sidebar-home">
          <Link className="link" to="/">
            <FontAwesomeIcon id="home-icon" icon={faHome} />
            <p>Home</p>
          </Link>
        </div>

        <div className="sidebar-library">
          <Link className="link" to="/">
            <FontAwesomeIcon id="library-icon" icon={faBookOpen} />
            <p>Your Library</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideBar;
