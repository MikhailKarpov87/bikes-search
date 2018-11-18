import axios from "axios";
import { API_URL } from "../constants";
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  UPDATE_SEARCHTERM,
  GET_SHOPLIST,
  GET_CATEGORIES,
  UPDATE_FILTER,
  SORT_RESULTS,
  TOGGLE_FILTER
} from "../constants";

//  Action for getting data from API_URL based on search term.
//  newRequest argument is flag used to differ new search request
//  from pagination requests and sort/filter requests.
export function fetchData(searchTerm, newRequest) {
  return (dispatch, getState) => {
    const {
      page,
      currentSearchTerm,
      sort: { sortBy, sortOrder },
      filter: { shops, categories }
    } = getState();

    //  Building API request values based on current state values
    const shopsQuery = shops ? shops.join() : "All";
    const categoriesQuery = categories ? categories.join() : "All";
    const sortQuery = sortBy && sortOrder ? `&sortBy=${sortBy}&sortOrder=${sortOrder}` : "";
    const newPage = newRequest ? 1 : page + 1;

    //  Stop API request if search term was not changed in input field
    //  and it was not pagination request (newRequest === true)
    if (searchTerm === currentSearchTerm && newRequest) return;

    dispatch(getData(newRequest));
    axios
      .get(
        `${API_URL}?search=${searchTerm}&page=${newPage}&shops=${shopsQuery}&categories=${categoriesQuery}${sortQuery}`
      )
      .then(data => {
        dispatch(getDataSuccess(data, searchTerm, newPage, newRequest));
      })
      .catch(error => {
        dispatch(getDataFailure(error));
      });
  };
}

//  Set Loading = true while performing request
export function getData(newRequest) {
  return { type: FETCHING_DATA, payload: newRequest };
}

//  API request success = dispatching data returned from API
export function getDataSuccess(data, searchTerm, page, newRequest) {
  return {
    type: FETCHING_DATA_SUCCESS,
    payload: {
      data,
      searchTerm,
      page,
      newRequest
    }
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
export function getShopList() {
  return dispatch => {
    axios.get(`${API_URL}?get_shopslist`).then(data => {
      dispatch({ type: GET_SHOPLIST, payload: data });
    });
  };
}

//  Action for getting categories list from API
export function getCategories() {
  return dispatch => {
    axios.get(`${API_URL}?get_categories`).then(data => {
      dispatch({ type: GET_CATEGORIES, payload: data });
    });
  };
}

//  Action for handling filters update
export function updateFilter(filterType, id, status) {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_FILTER,
      payload: {
        id,
        status,
        filterType
      }
    });

    const { searchTerm } = getState();

    //  If there is a search term, load data from API with updated filters
    if (searchTerm) dispatch(fetchData(searchTerm, true));
  };
}

//  Action for handling sort buttons update
export function sortResults(sortBy, sortOrder) {
  return (dispatch, getState) => {
    const { searchTerm } = getState();

    //  If sortOrder was not set, sortOrder = ASC, otherwise changing between ASC <=> DESC
    sortOrder = !sortOrder ? "ASC" : sortOrder === "ASC" ? "DESC" : "ASC";

    dispatch({
      type: SORT_RESULTS,
      payload: {
        sortBy,
        sortOrder
      }
    });

    //  If there is a search term, fetching new data from API with updated sort settings
    if (searchTerm) dispatch(fetchData(searchTerm, true));
  };
}

//  Action for toggling show/hide filter panel
export function toggleFilter(status) {
  return { type: TOGGLE_FILTER, status };
}
