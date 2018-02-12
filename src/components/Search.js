import React, { PropTypes, Component } from "react";
import { style } from "../style";
import { Switch, Case, Default } from "jsx-switch";
import RepoItem from "./RepoItem";

export default class Search extends Component {
  render() {
    const {
      repo_search,
      search_result,
      repo_name,
      user_name,
      setRepoName,
      fetching,
      showRepo
    } = this.props;

    const container = Object.keys(search_result).map(id => (
      <RepoItem
        key={id}
        id={id}
        showRepo={showRepo}
        name={search_result[id].name}
      />
    ));
    return (
      <div className={style.list_container}>
        <input
          className={fetching === "not_found" ? style.input_red : style.input}
          placeholder="User Name"
          value={user_name.name}
          onChange={event => {
            repo_search(event.target.value);
          }}
        />

        <input
          className={style.input}
          placeholder="Repository"
          value={repo_name.name}
          onChange={event => {
            setRepoName(event.target.value);
          }}
        />
        <div className={style.col_container + " position_absolute ligth_blue"}>
          {container}
        </div>
      </div>
    );
  }
}
