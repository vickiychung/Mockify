import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(() => this.props.history.push("/"));
  }

  update(field) {
    return (e => {
      this.setState({ [field]: e.currentTarget.value });
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleGuest() {
    let guestUsername = "guest".split("");
    let guestPassword = "password".split("");
    this.guestSignIn(guestUsername, guestPassword);
  }

  guestSignIn(guestUsername, guestPassword) {
    // autofill username => autofill password => auto login
    
    if (guestUsername.length > 0) {
      this.setState({ username: this.state.username + guestUsername.shift() },
        () => setTimeout(() => this.guestSignIn(guestUsername, guestPassword), 100)
      );
    } else if (guestPassword.length > 0) {
      this.setState({ password: this.state.password + guestPassword.shift() },
        () => setTimeout(() => this.guestSignIn(guestUsername, guestPassword), 100)
      );
    } else {
      if (this.props.formType === "Sign up for free to start listening.") {
        this.props.signIn(this.state);
      } else {
        this.props.action(this.state);
      }
    }
  }

  render() {
    const { formType, navLink } = this.props;
    const buttonText = (formType === "Sign up for free to start listening.") ? 
      "Sign Up" : "Log In";
    const altLinkText = (formType === "Sign up for free to start listening.") ?
      "Have an account?" : "Don't have an account?";
   
    return (
      <div className="session-form-container">
        <div className="form-logo"></div>

        <form className="session-form" onSubmit={this.handleSubmit}>
          <h3 className="form-title">{formType}</h3>
          <br/>

          <button className="guest-button" onClick={this.handleGuest}>
            continue with guest login
          </button>
          <br/>

          <label className="form-label">Username
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
              className="form-input"
            />
          </label>
          <br/>

          <label className="form-label">Password
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              className="form-input"
            />
          </label>
          <br/>

          <div className="session-errors">
            {this.renderErrors()}
          </div>

          <button className="session-button" type="submit">{buttonText}</button>
        </form>

        <div className="alt-link-text">
          {altLinkText}
        </div>
        <br/>

        <div className="alt-link-button">
          {navLink}
        </div>
      </div>
    );
  }
}

export default SessionForm;