import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.sessionErrors,
    formType: "Sign up for free to start listening.",
    navLink: <Link to="/signin">Log in</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(signUp(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);