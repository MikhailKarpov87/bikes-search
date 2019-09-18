import { combineReducers } from 'redux';
import page from './reducer_page';
import results from './reducer_search';
import searchTerm from './reducer_searchterm';
import shops from './reducer_shops';
import categories from './reducer_categories';
import loading from './reducer_loading';
import showFilter from './reducer_showfilter';
import filter from './reducer_filters';
import sort from './reducer_sort';

const rootReducer = combineReducers({
  searchTerm,
  results,
  shops,
  categories,
  loading,
  page,
  sort,
  showFilter,
  filter,
});

export default rootReducer;
