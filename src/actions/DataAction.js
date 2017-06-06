import { FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  NOT_FOUND,
  FETCHING_DATA_FAILURE } from '../constants/Data'

import {fetch_post} from '../services/fetch'
import {setRepo} from 'actions/SearchAction'
import {searchByRepo} from 'actions/SearchByRepoAction'
import {setRepoName} from 'actions/RepoNameAction'
import {set_user_name} from 'actions/UserNameAction'
import {show_repo} from 'actions/ShowRepoAction'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}
export function getDataSuccess() {
  return {
    type: FETCHING_DATA_SUCCESS
  }
}
export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}
export function userNotFound() {
  return {
    type: NOT_FOUND
  }
}
function filter_repo(repos){
  const result = []
  repos.map((repo) => {
    result.push(repo.name)
  })
  return result
}
export function repo_search(user_name) {
    return (dispatch) => {
      dispatch(set_user_name(user_name))
      switch(true){
        case user_name.length > 0:
          fetch_post( user_name, dispatch)
            .then((data) => {
              dispatch(setRepo(data))
              dispatch(setRepoName(''))
            })
            .catch(function(err) {
              console.log('filter request Error ', err);
            });
          break
        default:
          dispatch(setRepo([]))
          dispatch(show_repo(''))
          dispatch(searchByRepo({}))
      }
    }
}
