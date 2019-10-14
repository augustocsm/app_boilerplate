/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchApp, editApp } from "./../../actions/apps";
import AppForm from "./AppForm";

const AppEdit = props => {
  const onSubmit = formValues => {
    props.editApp(props.match.params.id, formValues);
  };

  useEffect(() => {
    props.fetchApp(props.match.params.id);
  }, []);

  return (
    <div>
      <AppForm
        title={"texts.apps.form.title"}
        onSubmit={onSubmit}
        initialValues={props.app}
        history={props.history}
      />
    </div>
  );
};

const mapStateToProps = (state, ownState) => {
  return {
    app: state.apps[ownState.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  {
    fetchApp,
    editApp
  }
)(AppEdit);
