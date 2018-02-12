import React, { PropTypes, Component } from "react";
import { style } from "../style";
import { Switch, Case, Default } from "jsx-switch";

export default class SearchState extends Component {
  render() {
    const { fetching } = this.props;
    return (
      <div className={style.bar_5}>
        <Switch>
          <Case expr={fetching == "pending"}>
            <h2>Загрузка...</h2>
          </Case>
          <Case expr={fetching == "not_found"}>
            <h2>Пользователь не найден.</h2>
          </Case>
          <Case expr={fetching == "error"}>
            <h2>Ошибка.</h2>
          </Case>
        </Switch>
      </div>
    );
  }
}
