import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateSearchTerm, fetchData } from "../../actions";
import { searchTipTexts, searchTipUpdateInterval } from "../../constants";

class SearchTips extends Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }

  componentDidMount() {
    //  Setting interval for rotating search tips
    this.interval = setInterval(() => this.nextMessage(this.state), searchTipUpdateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextMessage(state) {
    //  This method running in setInterval()
    //  Looping through array of search tips
    const num = searchTipTexts[++state.n] ? state.n : 0;
    this.setState({ n: num });
  }

  handleClick(searchTerm) {
    //  When search tip is clicked: update search term in input field,
    //  fetch search results from API
    this.props.updateSearchTerm(searchTerm);
    this.props.fetchData(searchTerm, true);
  }

  render() {
    const text = searchTipTexts[this.state.n];

    //  Render component if searchTipTexts is not empty
    return (
      searchTipTexts.length && (
        <div className="uk-text-center uk-animation-fade uk-animation-slow search_tip_box">
          Найти
          <span
            className={`search_tip_text`}
            key={this.state.n}
            onClick={() => this.handleClick(text)}
          >
            {text}
          </span>
        </div>
      )
    );
  }
}

SearchTips.propTypes = {
  updateSearchTerm: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateSearchTerm, fetchData }
)(SearchTips);
