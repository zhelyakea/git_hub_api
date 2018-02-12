import { SET_REPO_NAME } from "../constants/RepoName";
import { search_by_repo } from "./SearchByRepoAction";

export function set_repo_name(name) {
  return dispatch => {
    dispatch({
      type: SET_REPO_NAME,
      payload: name
    });
  };
}
export function setRepoName(name) {
  return dispatch => {
    dispatch(set_repo_name(name));
    dispatch(search_by_repo(name));
  };
}
