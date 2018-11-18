import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PropTypes from "prop-types";

import { sortResults } from "../../actions";
import SortButton from "./sort_button";
import { sortFields } from "../../constants";

class SortPanel extends Component {
  render() {
    const {
      resultsNum,
      results,
      sort: { sortBy, sortOrder },
      sortResults
    } = this.props;

    if (!resultsNum || !results) {
      return null;
    } else {
      return (
        <div className="uk-width-3-4 center-fix">
          <div className="sort_panel">
            <h5 className="uk-align-center sort_button" key="h5">
              Сортировать по:
            </h5>
            {_.map(sortFields, (value, key) => {
              return (
                <SortButton
                  name={key}
                  key={key}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  label={value}
                  onClick={event => sortResults(event.currentTarget.name, sortOrder)}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}

SortPanel.propTypes = {
  results: PropTypes.array,
  resultsNum: PropTypes.number,
  filter: PropTypes.shape({
    categories: PropTypes.array.isRequired,
    shops: PropTypes.array.isRequired
  }),
  sort: PropTypes.shape({
    sortBy: PropTypes.string,
    sortOrder: PropTypes.string
  }),
  sortResults: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    results: state.results.data,
    resultsNum: state.results.resultsNum,
    filter: state.filter,
    sort: state.sort
  };
};

export default connect(
  mapStateToProps,
  { sortResults }
)(SortPanel);
