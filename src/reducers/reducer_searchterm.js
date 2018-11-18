import { UPDATE_SEARCHTERM } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_SEARCHTERM:
      return action.payload;

    default:
      return state;
  }
}
