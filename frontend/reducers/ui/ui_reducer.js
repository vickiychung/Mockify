import { combineReducers } from 'redux';
import webPlayerReducer from './web_player_reducer';

const uiReducer = combineReducers({
  webPlayer: webPlayerReducer
});

export default uiReducer;