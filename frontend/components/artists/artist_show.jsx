import React from 'react';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  render() {
    const { artist, albums, currentUser } = this.props;
    
    if (artist) {
      console.log(albums);
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
