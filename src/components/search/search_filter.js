import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterList from './filter_list';
import { updateFilter } from '../../actions';

class SearchFilter extends Component {
  handleFilter = (event, name) => {
    const { id, checked } = event.currentTarget;
    console.log(id, checked);
    this.props.updateFilter({ id, checked, name });
  };

  render() {
    const { filter, shops, categories, showFilter } = this.props;

    return (
      <div
        className={`uk-animation-slide-bottom-medium filter-${
          showFilter & (shops.length > 0) ? 'expanded' : 'collapsed'
        }`}
      >
        <FilterList
          label='Магазины'
          list={shops}
          listName='shops'
          selected={filter.shops}
          handleFilter={this.handleFilter}
        />

        <FilterList
          label='Категории'
          list={categories}
          listName='categories'
          selected={filter.categories}
          handleFilter={this.handleFilter}
        />
      </div>
    );
  }
}

SearchFilter.propTypes = {
  filter: PropTypes.shape({
    categories: PropTypes.array.isRequired,
    shops: PropTypes.array.isRequired,
  }),
  shops: PropTypes.array,
  categories: PropTypes.array,
  showFilter: PropTypes.bool.isRequired,
  updateFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    showFilter: state.showFilter,
    shops: state.shops,
    categories: state.categories,
    filter: state.filter,
  };
};

export default connect(
  mapStateToProps,
  { updateFilter },
)(SearchFilter);
