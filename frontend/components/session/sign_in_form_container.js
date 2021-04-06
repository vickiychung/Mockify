import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.sessionErrors,
    formType: "To continue, log in to Mockify.",
    navLink: <Link to="/signup" style={{textDecoration: 'none'}}>sign up for mockify</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);