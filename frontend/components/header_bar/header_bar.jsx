import React from 'react';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: "hidden" }

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    if (this.state.dropdown === "show") {
      this.setState({ dropdown: "hidden" });
    } else {
      this.setState({ dropdown: "show" });
    }
  }

  render() {
    const { currentUser, signOut } = this.props;

    return (
      <div className="header-bar-wrapper">
        <button className="header-name" onClick={this.toggleDropdown}>
          {currentUser.username}
        </button>

        <div className={`header-dropdown ${this.state.dropdown}`}>
          <button className="header-logout" onClick={signOut}>Log out</button>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
