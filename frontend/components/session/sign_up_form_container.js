import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signUp, signIn, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.sessionErrors,
    formType: "Sign up for free to start listening.",
    navLink: <NavLink to="/signin" className="alt-link-button">Log in</NavLink>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(signUp(user)),
    signIn: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);