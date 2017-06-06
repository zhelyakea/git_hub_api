import {
  SHOW_REPO
} from '../constants/ShowRepo'
import { Link, browserHistory } from 'react-router'

export function show_repo(selected_repo) {
  return (dispatch) => {
    dispatch({
      type: SHOW_REPO,
      payload: selected_repo
    })
  }
}
function filter_repo(names, id){
  const result = {}
  Object.values(names).map((value) => {
    if(value.id === id) result
  })
  return result
}
export function showRepo(id) {
  return (dispatch) => {
    dispatch(show_repo(id))
    browserHistory.push('/page')
  }
}
