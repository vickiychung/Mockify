import React from 'react';
import Splash from './splash';
import SignedInHome from './signed_in_home';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;

    const signedIn = () => {
      return (
        <SignedInHome />
      );
    };

    const signedOut = () => {
      return (
        <Splash />
      );
    };

    return currentUser ? signedIn() : signedOut();
  }
}

export default Home;
