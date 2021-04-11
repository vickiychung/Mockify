import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tracksReducer from './tracks_reducer';
import albumsReducer from './albums_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  albums: albumsReducer
});

export default entitiesReducer;
