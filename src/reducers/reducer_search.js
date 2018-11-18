import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCHING_DATA:
      //  action.payload is newRequest. Return empty object if this is new search request
      return action.payload ? {} : state;

    case FETCHING_DATA_SUCCESS:
      const oldResults = state.data || [];
      const newResults = !action.payload.newRequest
        ? oldResults.concat(action.payload.data.data.results)
        : action.payload.data.data.results;

      return {
        ...state,
        data: newResults,
        resultsNum: action.payload.data.data.resultsNum
      };

    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
}
