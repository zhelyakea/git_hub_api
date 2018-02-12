import React, { PropTypes, Component } from "react";
import { style } from "../style";
import { Link, browserHistory } from "react-router";

export default class RepoItem extends Component {
  render() {
    const { name, showRepo, id } = this.props;
    return (
      <div className="flex_bar_0">
        <p
          onClick={event => {
            showRepo(id);
          }}
          className="hover_active"
        >
          {name}
        </p>
      </div>
    );
  }
}
