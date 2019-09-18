import React from 'react';
import PropTypes from 'prop-types';

const FilterList = props => {
  const { label, list, selected, handleFilter, listName } = props;

  return (
    <div>
      <label>
        <b>{label}</b>
      </label>

      {list.map(item => {
        const { id, name } = item;
        return (
          <div key={id}>
            <input
              className='uk-checkbox'
              type='checkbox'
              key={id}
              id={id}
              name={name}
              checked={selected.includes(id)}
              onChange={e => handleFilter(e, listName)}
            />
            {name}
          </div>
        );
      })}
    </div>
  );
};

FilterList.propTypes = {
  label: PropTypes.string.isRequired,
  listName: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterList;
