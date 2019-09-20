import React from "react";
import { connect } from "react-redux";
import { createApp } from "../../actions";
import AppForm from "./AppForm";

class AppCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createApp(formValues);
  };

  render() {
    return <AppForm onSubmit={this.onSubmit} title="Create new Application" />;
  }
}

export default connect(
  null,
  { createApp }
)(AppCreate);
