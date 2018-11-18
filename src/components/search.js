import React from "react";

import SearchForm from "./search/search_form";
import ResultList from "./search/result_list";
import SortPanel from "./search/sort_panel";
import Footer from "./footer";

const SearchMain = () => {
  return (
    <div className="main-container">
      <SearchForm />
      <SortPanel />
      <ResultList />
      <Footer />
    </div>
  );
};

export default SearchMain;
