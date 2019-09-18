import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SearchFilter from './search_filter';
import SearchTips from './search_tips';
import { fetchData, getShops, getCategories, toggleFilter, updateSearchTerm } from '../../actions';

class SearchForm extends Component {
  componentDidMount() {
    this.fetchData = _.debounce(this.props.fetchData, 1000);
    this.props.getShops();
    this.props.getCategories();
  }

  handleInputChange(event) {
    const searchTerm = event.currentTarget.value;
    const { updateSearchTerm, loading } = this.props;

    updateSearchTerm(searchTerm);
    !loading && searchTerm.length > 1 && this.fetchData(searchTerm, 1);
  }

  render() {
    const { searchTerm, fetchData, toggleFilter } = this.props;

    return (
      <div className='searchbar'>
        <SearchTips />
        <div className='uk-card-primary uk-card-body uk-card-small uk-width-1-2@m uk-animation-fade uk-animation uk-align-center searchbox'>
          <div className='uk-width-9-10 uk-align-center searchbar_form'>
            <div className='uk-flex uk-flex-center'>
              <input
                type='text'
                className='uk-input'
                onChange={event => this.handleInputChange(event)}
                value={searchTerm}
                onKeyPress={event =>
                  event.key === 'Enter' && searchTerm.length > 1 && fetchData(searchTerm, 1)
                }
              />
              <button
                className='uk-button uk-button-primary'
                onClick={() => fetchData(searchTerm, 1)}
              >
                Искать
              </button>
              <span
                className='filter-icon'
                uk-icon='settings'
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
  getShops: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  showFilter: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    searchTerm: state.searchTerm,
    showFilter: state.showFilter,
  };
};

export default connect(
  mapStateToProps,
  { updateSearchTerm, fetchData, getShops, getCategories, toggleFilter },
)(SearchForm);
