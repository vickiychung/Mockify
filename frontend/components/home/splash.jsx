import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {

  render() {
    return (
      <div>
        <div className="splash-header">
          <div className="splash-header-logo">
            <Link to="/">
              <img src={window.logoDarkURL} alt="logo-dark"/>
            </Link>
          </div>

          <div className="splash-header-links">
            <Link id="signup" to="/signup">Sign up</Link>
            <Link id="signin" to="/signin">Log in</Link>
          </div>
        </div>

        <div className="splash-main">
          <div className="splash-txt">
            <p>Music is</p>
            <p>everything</p>
          </div>
        </div>

        <div className="splash-footer">
          <a href="https://github.com/vickiychung">
            <img src={window.githubURL} alt="github-logo" />
          </a>

          <a href="https://www.linkedin.com/in/vickiychung/">
            <img src={window.linkedinURL} alt="linkedin-logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Splash;