import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/artists">go to artists index</Link>
        <br />
        <Link to="/albums">go to albums index</Link>
      </div>
    );
  }
}

export default SideBar;
