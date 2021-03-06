import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = Object.freeze({
  id: null
});

const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };

    case SIGNOUT_CURRENT_USER:
      return _nullSession;
  
    default:
      return oldState;
  }
};

export default sessionReducer;