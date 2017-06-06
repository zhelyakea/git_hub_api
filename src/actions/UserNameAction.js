import {
  SET_USER_NAME
} from '../constants/UserName'

export function set_user_name(name) {
  return (dispatch) => {
    dispatch({
      type: SET_USER_NAME,
      payload: name
    })
  }
}
