import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";
import { Button } from "semantic-ui-react";

const RemoteSubmitButton = ({ dispatch, props }) => (
  <Button
    onClick={() => dispatch(submit(props.formName))}
    positive
    labelPosition="right"
    icon="checkmark"
    content={props.text}
  />
);

const mapStateToProps = (state, props) => {
  return { state, props };
};

export default connect(
  mapStateToProps,
  null
)(RemoteSubmitButton);
