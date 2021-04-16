import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import PlaylistsIndex from '../../components/playlists/playlists_index';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user_id: this.props.currentUserId, name: "My Playlist #1" }

    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playlists !== prevProps.playlists) {
      this.setState({ name: `My Playlist #${this.props.playlists.length + 1}` });
    }
  }

  handleCreate() {
    this.props.createPlaylist(this.state);
  }
  
  render() {
    const { playlists } = this.props;

    return (
      <div>
        <Link to="/">
          <img id="sidebar-logo" src={window.logoDarkURL} alt="mockify_logo"/>
        </Link>

        <div className="sidebar-home">
          <Link className="link" to="/">
            <FontAwesomeIcon id="home-icon" icon={faHome} />
            <p>Home</p>
          </Link>
        </div>

        <div className="sidebar-library">
          <Link className="link" to="/">
            <FontAwesomeIcon id="library-icon" icon={faBookOpen} />
            <p>Your Library</p>
          </Link>
        </div>

        <div className="sidebar-create">
          <div className="create-wrapper" onClick={this.handleCreate}>
            <FontAwesomeIcon id="create-icon" icon={faPlusSquare} />
            <p>Create Playlist</p>
          </div>
        </div>

        <div>
          <PlaylistsIndex 
            playlists={playlists}
          />
        </div>
      </div>
    );
  }
}

export default SideBar;
