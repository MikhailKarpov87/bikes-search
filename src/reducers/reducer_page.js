import { FETCHING_DATA_SUCCESS } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCHING_DATA_SUCCESS:
      return action.payload.page;

    default:
      return state;
  }
}
