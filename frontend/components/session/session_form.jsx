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
   
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>{formType}</h3>
          <br/>

          <label>Username
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
          </label>
          <br/>

          <label>Password
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          </label>
          <br/>

          {this.renderErrors()}

          <button type="submit">{buttonText}</button>
          <br/>

          <p>or {navLink}</p>
        </form>

        <div>
          <p>Just visiting?</p>
          <button onClick={this.handleGuest}>Guest Log In</button>
        </div>
      </div>
    );
  }
}

export default SessionForm;