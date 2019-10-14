/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchApps } from "./../../actions/apps";
import { Link } from "react-router-dom";
import { TITLE_LIMIT, DESCRIPTION_LIMIT } from "./config";
import CrudBar from "./common/CrudBar";
import summarize from "./../../lib/tools/text";

const AppList = props => {
  const { t } = useTranslation();

  useEffect(() => {
    props.fetchApps();
  }, []);

  return (
    <div className="ui container">
      <div className="ui segment">
        <h2>{t("apps.list.title")}</h2>
        <div className="ui celled list">{renderList(props)}</div>
        <div>{renderCreateBtn()}</div>
      </div>
    </div>
  );
};

const renderList = props => {
  return props.apps.map(app => {
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
};

const renderCreateBtn = () => {
  return (
    <div style={{ textAlign: "right" }}>
      <Link to="/apps/new" className="ui button primary">
        <i className="file outline icon" />
        Novo
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { apps: Object.values(state.apps) };
};

export default connect(
  mapStateToProps,
  { fetchApps }
)(AppList);
