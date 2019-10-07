import React from "react";
import { connect } from "react-redux";
import { fetchApps } from "./../../actions/apps";
import { Link } from "react-router-dom";
import { TITLE_LIMIT, DESCRIPTION_LIMIT } from "./config";

import LanguageContext from "../../contexts/LanguageContext";

import CrudBar from "./common/CrudBar";
import summarize from "./../../lib/tools/text";

class AppList extends React.Component {
  componentDidMount() {
    this.props.fetchApps();
  }

  renderList() {
    return this.props.apps.map(app => {
      return (
        <div className="item" key={app.id}>
          <CrudBar app={app} read update delete />
          <i className="mid code middle aligned icon"></i>
          <div className="content">
            <Link to={`/apps/${app.id}`} className="header">
              {summarize(app.displayName, TITLE_LIMIT)}
            </Link>
            <div className="description">
              {summarize(app.description, DESCRIPTION_LIMIT)}
            </div>
          </div>
        </div>
      );
    });
  }

  renderCreateBtn() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/apps/new" className="ui button primary">
          <i className="file outline icon" />
          Novo
        </Link>
      </div>
    );
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {texts => (
          <div className="ui container">
            <div className="ui segment">
              <h2>{texts.apps.list.title}</h2>
              <div className="ui celled list">{this.renderList()}</div>
              <div>{this.renderCreateBtn()}</div>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

const mapStateToProps = state => {
  return { apps: Object.values(state.apps) };
};

export default connect(
  mapStateToProps,
  { fetchApps }
)(AppList);
