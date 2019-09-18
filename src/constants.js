//URL of server API
export const API_URL = process.env.REACT_APP_BACKEND_URL;

//Search tips to show it SearchTips component
export const searchTipTexts = ['амортизатор fox', 'заднее колесо', 'перчатки oakley', 'шлем POC'];

//Update interval for search tips in ms
export const searchTipUpdateInterval = 5000;

//Sort fields for results. Format [name: label]
export const sortFields = {
  price: 'Цене',
  shop: 'Магазину',
};

//Actions names
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';
export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export const GET_SHOPLIST = 'GET_SHOPLIST';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const SORT_RESULTS = 'SORT_RESULTS';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
