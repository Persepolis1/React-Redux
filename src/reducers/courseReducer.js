/**
 * Created by bobak on 2016-08-21.
 */
import * as types from '../actions/actionTypes';
export default function courseReducer (state = [] , action) {
  switch (action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.course;
    default:
      return state;
  }
}
