import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const signoutCurrentUser = () => {
  return {
    type: SIGNOUT_CURRENT_USER,
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const signUp = user => {
  return (dispatch => {
    return (
      SessionAPIUtil.signUp(user)
        .then(
          currentUser => dispatch(receiveCurrentUser(currentUser)),
          errors => dispatch(receiveErrors(errors.responseJSON))
        )
    );
  });
};

export const signIn = user => {
  return (dispatch => {
    return (
      SessionAPIUtil.signIn(user)
        .then(
          currentUser => dispatch(receiveCurrentUser(currentUser)),
          errors => dispatch(receiveErrors(errors.responseJSON))
        )
    );
  });
};

export const signOut = () => {
  return (dispatch => {
    return (
      SessionAPIUtil.signOut()
        .then(
          () => dispatch(signoutCurrentUser()),
          errors => dispatch(receiveErrors(errors.responseJSON))
        )
    );
  });
};