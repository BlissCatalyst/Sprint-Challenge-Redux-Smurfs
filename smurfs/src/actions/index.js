import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADDSMURF = "ADDSMURF";
export const GETSMURF = "GETSMURF";
export const UPDATESMURF = "UPDATESMURF";
export const DELETESMURF = "DELETESMURF";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDSMURF });
  axios
  .post('http://localhost:3333/smurfs', newSmurf)
  .then(res => console.log(res))
  .catch(err => {
    dispatch({ type: "NEW_SMURF_ERROR", payload: err });
  });
};

export const getSmurf = () => dispatch => {
  dispatch({ type: GETSMURF });
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => console.log(res))
  .catch(err => {
    dispatch({ type: "GET_SMURF_ERROR" });
  });
};