import { GET_CATEGORIES } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload.data;

    default:
      return state;
  }
}
