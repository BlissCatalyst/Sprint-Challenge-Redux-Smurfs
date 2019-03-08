/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADDSMURF,
  GETSMURF,
  UPDATESMURF,
  DELETESMURF
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default function reducer(state = initialState, action) {
  switch(action.type) {
    // Adding smurf cases
    case ADDSMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case "ADD_SUCCESS":
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case "NEW_SMURF_ERROR":
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    // Fetching Smurf cases
    case GETSMURF:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case "GET_SUCCESS":
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case "GET_SMURF_ERROR":
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    // stretch cases
    case UPDATESMURF:
      return {
        ...state
      };
    case DELETESMURF:
      return {
        ...state
      };
    default: return state;
  }
}