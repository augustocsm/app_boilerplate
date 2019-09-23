import React from "react";
import AppCreate from "./applications/AppCreate";

import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/apps/" exact component={AppCreate} />
              <Route path="/apps/new" component={AppCreate} />
              <Route path="/apps/edit/:id" component={AppCreate} />
              <Route path="/apps/delete/:id" component={AppCreate} />
              <Route path="/apps/:id" component={AppCreate} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
