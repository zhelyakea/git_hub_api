import {
  SHOW_REPO
} from '../constants/ShowRepo'

const initial = {id: null}
export default function search(initial, action) {
  const initial_state = {...initial}
	const new_state = action.payload
	switch (action.type) {
		case SHOW_REPO:
      initial_state.id =  new_state
	    return initial_state
    default:
    	return initial_state
	}
}
