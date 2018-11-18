import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return true;

    case FETCHING_DATA_SUCCESS:
    case FETCHING_DATA_FAILURE:
      return false;

    default:
      return state;
  }
}
