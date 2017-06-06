import {
  SEAECH_BY_REPO
} from '../constants/SearchByRepo'
const initial = {}

export default function search(initial, action) {
  const initial_state = {...initial}
	const new_state = action.payload
	switch (action.type) {
		case SEAECH_BY_REPO:
	    return new_state
    default:
    	return initial_state
	}
}
