import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ResultItem from './result_item';
import Spinner from '../spinner';
import { fetchData } from '../../actions';

class ResultList extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const { scrollingElement } = document;
      if (scrollingElement.scrollTop + window.innerHeight >= scrollingElement.offsetHeight) {
        this.loadMoreResults();
      }
    });
  }

  loadMoreResults() {
    const { searchTerm, page, resultsNum, loading, fetchData } = this.props;
    !loading && page * 10 < resultsNum && fetchData(searchTerm, page + 1);
  }

  getCategoryName = id => this.props.categories.find(category => category.id === id).name || '--';

  getShopName = id => this.props.shops.find(shop => shop.id === id).name || '--';

  render() {
    const { resultsNum, searchTerm, results, loading, error } = this.props;

    return error ? (
      <div className='uk-width-1-2@m uk-align-center'>
        <div class='uk-alert-danger' uk-alert>
          <span class='uk-alert-close' uk-close />
          <p>Возникла ошибка при загрузке результатов. Попробуйте еще раз.</p>
        </div>
      </div>
    ) : (
      <div className='uk-width-1-2@m uk-align-center'>
        {searchTerm && results && (
          <h4 className='uk-heading-line uk-text-center'>
            <span>
              {results
                ? !!resultsNum
                  ? 'Найдено товаров: ' + resultsNum
                  : 'Товаров не найдено :('
                : null}
            </span>
          </h4>
        )}

        {!!resultsNum &&
          _.map(results, result => {
            return (
              <ResultItem
                key={result.id}
                result={result}
                shopName={this.getShopName(result.shop)}
                catName={this.getCategoryName(result.category)}
              />
            );
          })}

        <Spinner isLoading={loading} />
      </div>
    );
  }
}

ResultList.propTypes = {
  searchTerm: PropTypes.string,
  filter: PropTypes.shape({
    categories: PropTypes.array.isRequired,
    shops: PropTypes.array.isRequired,
  }),
  page: PropTypes.number.isRequired,
  resultsNum: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  sort: PropTypes.shape({
    sortBy: PropTypes.string,
    sortOrder: PropTypes.string,
  }),
  fetchData: PropTypes.func.isRequired,
  shops: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  results: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    results: state.results.data,
    error: state.results.error,
    shops: state.shops,
    categories: state.categories,
    loading: state.loading,
    resultsNum: state.results.resultsNum,
    sort: state.sort,
    page: state.page,
    filter: state.filter,
    searchTerm: state.searchTerm,
  };
};

export default connect(
  mapStateToProps,
  { fetchData },
)(ResultList);
