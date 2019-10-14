import React, { Suspense } from "react";
import AppCreate from "./applications/AppCreate";
import AppEdit from "./applications/AppEdit";
import AppList from "./applications/AppList";
import AppShow from "./applications/AppShow";
import AppDelete from "./applications/AppDelete";

import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import LanguageSelector from "./common/LanguageSelector";

import "../config/i18n";

const App = () => {
  return (
    <div className="ui container">
      <Suspense fallback={null}>
        <LanguageSelector />
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/apps/" exact component={AppList} />
              <Route path="/apps/new" component={AppCreate} />
              <Route path="/apps/edit/:id" component={AppEdit} />
              <Route path="/apps/delete/:id" component={AppDelete} />
              <Route path="/apps/:id" component={AppShow} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
