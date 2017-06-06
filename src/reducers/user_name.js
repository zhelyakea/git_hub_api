import {
  SET_USER_NAME
} from '../constants/UserName'
const initial = { name: null}

export default function search(initial, action) {
  const initial_state = {...initial}
	const name = action.payload
	switch (action.type) {
		case SET_USER_NAME:
	    return {name: name}
    default:
    	return initial_state
	}
}
