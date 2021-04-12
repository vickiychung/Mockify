import React from 'react';
import ArtistsIndexContainer from '../artists/artists_index_container';
import AlbumsIndexContainer from '../albums/albums_index_container';

class Main extends React.Component {

  render() {
    const { currentUser, signOut } = this.props;

    return (
      <div className="main-wrapper"> 
        <div className="main-header">
          <p>{currentUser.username}</p>
          <button onClick={signOut}>Log out</button>
        </div>

        <ArtistsIndexContainer />
        <AlbumsIndexContainer />
      </div>
    );
  }
}

export default Main;
