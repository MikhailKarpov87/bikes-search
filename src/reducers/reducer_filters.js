import _ from "lodash";
import { GET_SHOPLIST, GET_CATEGORIES, UPDATE_FILTER } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_SHOPLIST:
      return {
        ...state,
        shops: _.keys(action.payload.data)
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: _.keys(action.payload.data)
      };

    case UPDATE_FILTER:
      const filterType = action.payload.filterType;
      //  filterValue is 'checked' value of checbox. If checked = true,
      //  adding its id value to array, otherwise removing its id from array
      const filterValue = !action.payload.status
        ? state[filterType].filter(value => value !== action.payload.id)
        : [...state[filterType], action.payload.id];

      return {
        ...state,
        [filterType]: filterValue
      };

    default:
      return state;
  }
}
