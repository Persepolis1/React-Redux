/**
 * Created by bobak on 2016-08-21.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});
export default rootReducer;
