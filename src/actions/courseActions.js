/**
 * Created by bobak on 2016-08-21.
 */
import * as types from './actionTypes';
export function createCourse(course){
  return {type : types.CREATE_COURSE  , course};
}
