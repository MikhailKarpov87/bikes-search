import React from "react";
import PropTypes from "prop-types";

const SortButton = props => {
  const buttonStyle = props.sortBy === props.name ? "primary" : "default";
  const orderSign = props.sortBy === props.name && props.sortOrder === "DESC" ? "↑" : "↓";

  return (
    <button
      className={`uk-button uk-button-${buttonStyle} uk-button-small sort_button`}
      name={props.name}
      key={props.name}
      onClick={props.onClick}
    >
      {props.label + orderSign}
    </button>
  );
};

SortButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf(["ASC", "DESC", ""])
};

export default SortButton;
