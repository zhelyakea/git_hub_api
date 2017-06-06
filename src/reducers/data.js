import { FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  NOT_FOUND,
  FETCHING_DATA_FAILURE } from '../constants/Data'
const initialState = {
  state: 'sucess'
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        state: 'pending'
      }
      break;
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        state: 'success'
      }
      break;
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        state: 'error'
      }
      break;
    case NOT_FOUND:
      return {
        ...state,
        state: 'not_found'
      }
      break;
    default:
      return state
  }
}
