import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import data from './data'
import repo from './repo'
import search_result from './search_result'
import repo_name from './repo_name'
import user_name from './user_name'
import selected_repo from './selected_repo'

export default combineReducers({
  data,
  repo,
  search_result,
  repo_name,
  user_name,
  selected_repo,
  routing: routerReducer
})
