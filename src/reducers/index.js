import { combineReducers } from 'redux';
import page from './page';
import user from './user';

export default combineReducers({
    user,
    page
});