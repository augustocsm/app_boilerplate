import React from "react";
import { connect } from "react-redux";
import { fetchApp } from "./../../actions/apps";
import CrudBar from "./common/CrudBar";
import PlaceHolder from "./common/PlaceHolder";
import LanguageContext from "../../contexts/LanguageContext";

class AppShow extends React.Component {
  componentDidMount() {
    this.props.fetchApp(this.props.match.params.id);
  }

  render() {
    const app = this.props.app;

    if (!app) {
      return <PlaceHolder />;
    }

    return (
      <LanguageContext.Consumer>
        {texts => {
          const label = texts.apps.form.field;

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
                    <h5>{label.name}</h5>
                    <p>{app.appName}</p>
                  </div>

                  <div className="column">
                    <h5>{label.displayName}</h5>
                    <p>{app.displayName}</p>
                  </div>

                  <div className=" sixteen wide column ">
                    <h5>{label.apiDomain}</h5>
                    <p>{app.apiDomain}</p>
                  </div>

                  <div className="column">
                    <h5>{label.description}</h5>
                    <p>{app.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { app: state.apps[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchApp }
)(AppShow);
