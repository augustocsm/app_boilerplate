import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchApp } from "./../../actions/apps";
import CrudBar from "./common/CrudBar";
import PlaceHolder from "./common/PlaceHolder";

import { useTranslation } from "react-i18next";

const AppShow = props => {
  // componentDidMount() {
  //   this.props.fetchApp(this.props.match.params.id);
  // }
  const { t } = useTranslation();

  useEffect(() => {
    props.fetchApp(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const app = props.app;

  if (!app) {
    return <PlaceHolder />;
  }

  return (
    <div className="ui container">
      <div className="ui segment">
        <h2 className="ui left floated header">{app.displayName}</h2>
        <div className="ui right floated header">
          <CrudBar app={app} list update delete />
        </div>

        <div className="ui clearing divider"></div>
        <div className="ui two column doubling stackable grid">
          <div className="column ">
            <h5>{t("apps.form.field.name")}</h5>
            <p>{app.appName}</p>
          </div>

          <div className="column">
            <h5>{t("apps.form.field.displayName")}</h5>
            <p>{app.displayName}</p>
          </div>

          <div className=" sixteen wide column ">
            <h5>{t("apps.form.field.apiDomain")}</h5>
            <p>{app.apiDomain}</p>
          </div>

          <div className="column">
            <h5>{t("apps.form.field.description")}</h5>
            <p>{app.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { app: state.apps[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchApp }
)(AppShow);
