import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = props => {
  const { name, label } = props;

  const setComponent = () => {
    return !props.component ? "input" : props.component;
  };

  const setType = () => {
    return !props.component ? "text" : props.type;
  };

  return (
    <div className="field">
      <label>
        <h5>
          {label}
          <ErrorMessage
            name={name}
            component="div"
            className="ui left pointing red label"
          />
        </h5>
      </label>
      <Field
        type={setType()}
        component={setComponent()}
        name={name}
        className="ui field"
      />
    </div>
  );
};

export default FormField;
