import React from 'react';
import ArtistsIndexItem from './artists_index_item';

class ArtistsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  componentWillUnmount() {
    this.props.clearArtists();
  }

  render() {
    const { artists } = this.props;

    return (
      <div>
        <h1>Featured artists</h1>

        <ul className="artists-index-container">
          {artists.map(artist => <ArtistsIndexItem 
            key={artist.id}
            artist={artist}
          />)}
        </ul>
      </div>
    )
  }
}

export default ArtistsIndex;
