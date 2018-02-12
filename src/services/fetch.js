import { getData } from "../actions/DataAction";
import { getDataFailure } from "../actions/DataAction";
import { getDataSuccess } from "../actions/DataAction";
import { userNotFound } from "../actions/DataAction";

export function fetch_post(username, dispatch) {
  dispatch(getData());
  return fetch("https://api.github.com/users/" + username + "/repos", {
    mode: "cors"
  })
    .then(function(data) {
      switch (data.status) {
        case 200:
        case 304:
          dispatch(getDataSuccess());
          return data.json();
          break;
        case 404:
          dispatch(getDataFailure());
          dispatch(userNotFound());
          break;
        default:
          dispatch(getDataFailure());
      }
    })
    .catch(function(err) {
      dispatch(getDataFailure());
      console.log("fetch Error ", err);
    });
}
