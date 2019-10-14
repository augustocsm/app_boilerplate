import React from "react";
import { connect } from "react-redux";
import { createApp } from "../../actions/apps";
import AppForm from "./AppForm";

const AppCreate = props => {
  const onSubmit = formValues => {
    props.createApp(formValues);
  };

  return (
    <AppForm
      title="Nova Aplicação"
      onSubmit={onSubmit}
      history={props.history}
      initialValues={{
        appName: "",
        displayName: "",
        apiDomain: "",
        description: ""
      }}
    />
  );
};

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
