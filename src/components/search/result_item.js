import React from "react";
import PropTypes from "prop-types";

const SearchResultItem = props => {
  const { id, name, url, price } = props.result;
  return (
    <div className="searchresult">
      <div
        className="uk-card-default uk-card-body uk-card-small uk-animation-fade uk-animation-fast listitem"
        key={id}
      >
        <div className="result_header">
          <h4>{name}</h4>
          <span className="uk-label">{price} ₽</span>
        </div>
        <ul className="uk-breadcrumb">
          <li>{props.shopName}</li>
          <li>{props.catName}</li>
        </ul>
        <a href={url} target="_blank" rel="noreferrer noopener">
          Перейти в магазин
        </a>
      </div>
    </div>
  );
};

SearchResultItem.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  shopName: PropTypes.string.isRequired,
  catName: PropTypes.string.isRequired
};

export default SearchResultItem;
