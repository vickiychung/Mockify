import React from 'react';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  render() {
    const { artist, currentUser } = this.props;
    
    if (artist) {
      return (
        <div>
          <p>{currentUser.username}</p>

          <h1>{artist.name}</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ArtistShow;
