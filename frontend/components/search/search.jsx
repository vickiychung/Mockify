import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { tracks } = this.props;
    
    return (
      <div className="signed-in-home-container">
        <div className="search-header">
          <div className="search-bar-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input className="search-bar" type="text" placeholder="search by song name" />
          </div>
        </div>

        <div className="search-tracks-header">
          <p>#</p>
          <p>TITLE</p>
          <p>ALBUM</p>
          <p>ARTIST</p>
          <p> <FontAwesomeIcon icon={faClock} /> </p>
        </div>
      </div>
    );
  }
}

export default Search;
