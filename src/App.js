import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import SearchMain from "./components/search";

const initialState = {
  searchTerm: "",
  currentSearchTerm: "",
  results: {},
  shops: {},
  categories: {},
  loading: false,
  page: 1,
  sort: {
    sortBy: "",
    sortOrder: ""
  },
  filter: {
    categories: [],
    shops: []
  },
  showFilter: false
};

const myStore = composeWithDevTools(applyMiddleware(thunk))(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={myStore(reducers, initialState)}>
        <SearchMain />
      </Provider>
    );
  }
}

export default App;
