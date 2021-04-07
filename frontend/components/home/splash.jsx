import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <div className="splash-header">
          <img src={window.logoDarkURL} alt="logo-dark"/>
        </div>

        <div className="splash-main">

        </div>
      </div>
    );
  }
}

export default Splash;