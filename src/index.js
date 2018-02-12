import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import Index from "./components/Index";
import Main from "./components/Main";
import Page from "./components/Page";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

require("../css/style.css");
require("../css/flex.css");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Index} />
        <Route path="/page" component={Page} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
