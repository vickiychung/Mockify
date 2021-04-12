import React from 'react';
import ArtistsIndexItem from './artists_index_item';

class ArtistsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists, fetchArtists } = this.props;

    return (
      <div>
        <h1>Featured artists</h1>

        <ul>
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
