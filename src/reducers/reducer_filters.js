import { GET_SHOPLIST, GET_CATEGORIES, UPDATE_FILTER } from '../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_SHOPLIST:
      return {
        ...state,
        shops: action.payload.data.map(value => value.id),
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.data.map(value => value.id),
      };

    case UPDATE_FILTER:
      const { name, id, checked } = action.payload;

      return {
        ...state,
        [name]: checked ? [...state[name], +id] : state[name].filter(value => value !== +id),
      };

    default:
      return state;
  }
}
