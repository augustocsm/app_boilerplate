import React from "react";
import { connect } from "react-redux";
import { fetchApp, editApp } from "./../../actions/apps";
import AppForm, { validateBtn } from "./AppForm";
import LanguageContext from "../../contexts/LanguageContext";

class AppEdit extends React.Component {
  onSubmit = formValues => {
    this.props.editApp(this.props.match.params.id, formValues);
  };

  componentDidMount() {
    this.props.fetchApp(this.props.match.params.id);
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {texts => (
          <div>
            <AppForm
              title={texts.apps.form.title}
              onSubmit={this.onSubmit}
              initialValues={this.props.app}
              history={this.props.history}
              submitBtn={validateBtn(this.props.form)}
              texts={texts}
            />
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  // console.log(state);
  return {
    app: state.apps[ownState.match.params.id],
    form: state.form.appForm
  };
};

export default connect(
  mapStateToProps,
  {
    fetchApp,
    editApp
  }
)(AppEdit);
