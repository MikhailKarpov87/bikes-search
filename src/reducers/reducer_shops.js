import { GET_SHOPLIST } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_SHOPLIST:
      return action.payload.data;

    default:
      return state;
  }
}
