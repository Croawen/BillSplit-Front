import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import Wrapper from "./modules/Wrapper";
import history from "./redux/history";
import store from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

async function bootstrap() {

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Wrapper} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
  registerServiceWorker();
}

bootstrap();
