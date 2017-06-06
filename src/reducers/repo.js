import {
  SET_REPO
} from '../constants/Search'

export default function search(initial, action) {
  const initial_staet = {...initial}
	const new_state = action.payload
	switch (action.type) {
		case SET_REPO:
	    return new_state
    default:
    	return initial_staet
	}
}
