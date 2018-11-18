import { TOGGLE_FILTER } from "../constants";

export default function(state = {}, action) {
  const status = action.status;
  switch (action.type) {
    case TOGGLE_FILTER:
      return status;

    default:
      return state;
  }
}
