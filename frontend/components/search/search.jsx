import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchItem from './search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { resultTracks: props.tracks}

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchTracks();
    this.props.fetchAlbums();
    this.props.fetchArtists();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.tracks !== this.props.tracks) {
  //     this.setState({ resultTracks: this.props.tracks });
  //   }
  // }

  handleSearch(e) {
    let searchResult;
    searchResult = this.props.tracks.filter(track => 
      track.name.toLowerCase().includes(e.target.value.toLowerCase()));
    
    this.setState({ resultTracks: searchResult });
  }

  render() {
    const { albums, artists, selectTrack, togglePlayTrack } = this.props;
    const { resultTracks } = this.state;
    let list;

    list = resultTracks.map((track, idx) => <SearchItem
      key={track.id}
      track={track}
      idx={idx}
      albums={albums}
      artists={artists}
      selectTrack={selectTrack}
      togglePlayTrack={togglePlayTrack}
    />)

    return (
      <div className="signed-in-home-container">
        <div className="search-header">
          <div className="search-bar-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input className="search-bar" 
              type="text" 
              placeholder="search by song name" 
              onChange={this.handleSearch}
            />
          </div>
        </div>

        <div className="search-tracks-header">
          <p>#</p>
          <p>TITLE</p>
          <p>ALBUM</p>
          <p>ARTIST</p>
          <p> <FontAwesomeIcon icon={faClock} /> </p>
        </div>

        <ul className="tracks-container">
          {list}
        </ul>
      </div>
    );
  }
}

export default Search;
