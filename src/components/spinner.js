import React from "react";

const Spinner = props => {
  return props.isLoading ? (
    <div className="flex-container">
      <span uk-spinner="" className="uk-align-center loader-fix" />
    </div>
  ) : null;
};

export default Spinner;
