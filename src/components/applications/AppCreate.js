import React from "react";
import { connect } from "react-redux";
import { createApp } from "../../actions/apps";
import AppForm, { validateBtn } from "./AppForm";

class AppCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createApp(formValues);
  };

  render() {
    return (
      <AppForm
        title="Nova Aplicação"
        onSubmit={this.onSubmit}
        history={this.props.history}
        submitBtn={validateBtn(this.props.form)}
      />
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
  { createApp }
)(AppCreate);
