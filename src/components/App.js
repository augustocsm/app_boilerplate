import React from "react";
import AppCreate from "./applications/AppCreate";
import AppEdit from "./applications/AppEdit";
import AppList from "./applications/AppList";
import AppShow from "./applications/AppShow";
import AppDelete from "./applications/AppDelete";

import LanguageContext from "../contexts/LanguageContext";
import LanguageSelector from "./common/LanguageSelector";

import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import texts from "../config/languages/";

class App extends React.Component {
  state = { texts: texts.en };

  onLangChange = texts => {
    this.setState({ texts });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLangChange={this.onLangChange} />
        <LanguageContext.Provider value={this.state.texts}>
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
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
