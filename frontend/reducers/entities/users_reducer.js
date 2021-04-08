import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from '../../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState;

    case SIGNOUT_CURRENT_USER:
      return {};
  
    default:
      return oldState;
  }
};

export default usersReducer;