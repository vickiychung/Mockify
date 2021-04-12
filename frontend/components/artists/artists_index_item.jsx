import React from 'react';

class ArtistsIndexItem extends React.Component {

  render() {
    const { artist } = this.props;

    return(
      <div>
        <li>
          <p>{artist.name}</p>
        </li>
      </div>
    )
  }
}

export default ArtistsIndexItem;
