import axios from 'axios';
import { API_URL } from '../constants';
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  UPDATE_SEARCHTERM,
  GET_SHOPLIST,
  GET_CATEGORIES,
  UPDATE_FILTER,
  SORT_RESULTS,
  TOGGLE_FILTER,
} from '../constants';

export function fetchData(searchTerm, page) {
  return (dispatch, getState) => {
    const state = getState();
    const {
      sort: { sortBy, sortOrder },
      filter: { shops, categories },
    } = state;

    const shopsQuery = shops ? shops.join() : 'All';
    const categoriesQuery = categories ? categories.join() : 'All';
    const sortQuery = sortBy && sortOrder ? `&sortBy=${sortBy}&sortOrder=${sortOrder}` : '';

    dispatch(getData(page));
    axios
      .get(
        `${API_URL}/search/?search=${searchTerm}&page=${page}&shops=${shopsQuery}&categories=${categoriesQuery}${sortQuery}`,
      )
      .then(data => {
        dispatch(getDataSuccess(data, searchTerm, page));
      })
      .catch(error => {
        dispatch(getDataFailure(error));
      });
  };
}

//  Set Loading = true while performing request
export function getData(page) {
  return { type: FETCHING_DATA, payload: page };
}

//  API request success = dispatching data returned from API
export function getDataSuccess(data, searchTerm, page) {
  return {
    type: FETCHING_DATA_SUCCESS,
    payload: {
      data,
      searchTerm,
      page,
    },
  };
}

//  API request failure = dispatching error message
export function getDataFailure(error) {
  return { type: FETCHING_DATA_FAILURE, payload: error };
}

//  Input onChange handler action
export function updateSearchTerm(data) {
  return { type: UPDATE_SEARCHTERM, payload: data };
}

//  Action for getting shops list from API
export function getShops() {
  return dispatch => {
    axios.get(`${API_URL}/shops`).then(data => {
      dispatch({ type: GET_SHOPLIST, payload: data });
    });
  };
}

//  Action for getting categories list from API
export function getCategories() {
  return dispatch => {
    axios.get(`${API_URL}/categories`).then(data => {
      dispatch({ type: GET_CATEGORIES, payload: data });
    });
  };
}

//  Action for handling filters update
export function updateFilter({ name, id, checked }) {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_FILTER,
      payload: { name, id, checked },
    });

    const { searchTerm } = getState();

    //  If there is a search term, load data from API with updated filters
    if (searchTerm) dispatch(fetchData(searchTerm, 1));
  };
}

export function updateSort(sortBy, sortOrder) {
  return (dispatch, getState) => {
    const { searchTerm } = getState();

    sortOrder = !sortOrder ? 'ASC' : sortOrder === 'ASC' ? 'DESC' : 'ASC';

    dispatch({
      type: SORT_RESULTS,
      payload: {
        sortBy,
        sortOrder,
      },
    });

    //  If there is a search term, fetching new data from API with updated sort settings
    if (searchTerm) dispatch(fetchData(searchTerm, 1));
  };
}

//  Action for toggling show/hide filter panel
export function toggleFilter(status) {
  return { type: TOGGLE_FILTER, status };
}
