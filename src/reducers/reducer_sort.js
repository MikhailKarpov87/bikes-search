import { SORT_RESULTS } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case SORT_RESULTS:
      const { sortBy, sortOrder } = action.payload;
      return {
        sortBy,
        sortOrder
      };

    default:
      return state;
  }
}
