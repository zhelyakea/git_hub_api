import {
  SET_REPO
} from '../constants/Search'

export function setRepo(repo) {
  return (dispatch) => {
    dispatch({
      type: SET_REPO,
      payload: repo
    })
  }
}
