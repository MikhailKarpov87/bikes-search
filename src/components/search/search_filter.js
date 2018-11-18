import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";

import FilterList from "./filter_list";
import { updateFilter } from "../../actions";

class SearchFilter extends Component {
  handleFilter(event) {
    const value = event.currentTarget;
    this.props.updateFilter(value.name, value.id, value.checked);
  }

  render() {
    const { filter, shops, categories, showFilter } = this.props;

    return (
      <div
        className={`uk-animation-slide-bottom-medium filter-${
          showFilter & (_.size(shops) > 0) ? "expanded" : "collapsed"
        }`}
      >
        <FilterList
          label="Магазины"
          list={shops}
          name="shops"
          selected={filter.shops}
          handleFilter={event => this.handleFilter(event)}
        />

        <FilterList
          label="Категории"
          list={categories}
          name="categories"
          selected={filter.categories}
          handleFilter={event => this.handleFilter(event)}
        />
      </div>
    );
  }
}

SearchFilter.propTypes = {
  filter: PropTypes.shape({
    categories: PropTypes.array.isRequired,
    shops: PropTypes.array.isRequired
  }),
  shops: PropTypes.object,
  categories: PropTypes.object,
  showFilter: PropTypes.bool.isRequired,
  updateFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    showFilter: state.showFilter,
    shops: state.shops,
    categories: state.categories,
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  { updateFilter }
)(SearchFilter);
