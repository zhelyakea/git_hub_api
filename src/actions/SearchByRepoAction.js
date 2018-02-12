import { SEAECH_BY_REPO } from "../constants/SearchByRepo";
import { set_repo_name } from "./RepoNameAction";

export function searchByRepo(repo) {
  return dispatch => {
    dispatch({
      type: SEAECH_BY_REPO,
      payload: repo
    });
  };
}
function filter_repo(names, words) {
  const result = {};
  Object.keys(names).map(key => {
    if (names[key].name.indexOf(words) == 0) {
      result[names[key].id] = { ...names[key] };
      result[names[key].id].owner = { ...names[key].owner };
    }
  });
  return result;
}
export function search_by_repo(words) {
  return (dispatch, getState) => {
    dispatch(searchByRepo(filter_repo(getState().repo, words)));
  };
}
