import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  update(field) {
    return (e => {
      this.setState({ [field]: e.currentTarget.value });
    });
  }

  render() {
    const { errors, formType, navLink } = this.props;
    const buttonText = (formType === "Sign up for free to start listening.") ? 
      "Sign Up" : "Log In";
    const linkText = (formType === "Sign up for free to start listening.") ?
      "Log In" : "Sign Up";

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>{formType}</h3>
          <br/>

          <label>Username
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <br/>

          <label>Password
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <br/>

          <button type="submit">{buttonText}</button>
          <br/>

          <p>or {navLink}</p>
        </form>
      </div>
    );
  }
}

export default SessionForm;