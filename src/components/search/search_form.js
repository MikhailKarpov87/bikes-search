import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";

import SearchFilter from "./search_filter";
import SearchTips from "./search_tips";
import {
  fetchData,
  getShopList,
  getCategories,
  toggleFilter,
  updateSearchTerm
} from "../../actions";

class SearchForm extends Component {
  componentDidMount() {
    //  Creating debounced version of fetchData for using in input onChange event
    this.fetchData = _.debounce(this.props.fetchData, 1000);

    //  Gettings list of shops and categories
    this.props.getShopList();
    this.props.getCategories();
  }

  handleInputChange(event) {
    const searchTerm = event.currentTarget.value;

    //  Updating search term on input change
    this.props.updateSearchTerm(searchTerm);

    //  If current state is not 'loading' and search term length > 1, fetching search results from API
    //  true = newRequest flag for fetchData()
    !this.props.loading && searchTerm.length > 1 && this.fetchData(searchTerm, true);
  }

  render() {
    const { searchTerm, fetchData, toggleFilter } = this.props;

    return (
      <div className="searchbar">
        <SearchTips />
        <div className="uk-card-primary uk-card-body uk-card-small uk-width-1-2@m uk-animation-fade uk-animation uk-align-center searchbox">
          <div className="uk-width-9-10 uk-align-center searchbar_form">
            <div className="uk-flex uk-flex-center">
              <input
                type="text"
                className="uk-input"
                onChange={event => this.handleInputChange(event)}
                value={searchTerm}
                onKeyPress={event =>
                  event.key === "Enter" && searchTerm.length > 1 && fetchData(searchTerm, true)
                }
              />
              <button
                className="uk-button uk-button-primary"
                onClick={() => fetchData(searchTerm, true)}
              >
                Искать
              </button>
              <span
                className="filter-icon"
                uk-icon="settings"
                onClick={() => {
                  toggleFilter(!this.props.showFilter);
                }}
              />
            </div>
          </div>
          <SearchFilter />
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  getCategories: PropTypes.func.isRequired,
  getShopList: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  showFilter: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    searchTerm: state.searchTerm,
    showFilter: state.showFilter
  };
};

export default connect(
  mapStateToProps,
  { updateSearchTerm, fetchData, getShopList, getCategories, toggleFilter }
)(SearchForm);
