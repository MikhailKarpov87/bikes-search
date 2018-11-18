import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const FilterList = props => {
  const { label, list, selected, handleFilter, name } = props;
  return (
    <div>
      <label>
        <b>{label}</b>
      </label>

      {_.map(list, (value, key) => (
        <div key={key}>
          <input
            className="uk-checkbox"
            type="checkbox"
            key={key}
            id={key}
            name={name}
            checked={selected.includes(key)}
            onChange={handleFilter}
          />
          {value}
        </div>
      ))}
    </div>
  );
};

FilterList.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  handleFilter: PropTypes.func.isRequired
};

export default FilterList;
