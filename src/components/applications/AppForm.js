import React from "react";
import { Field, reduxForm } from "redux-form";

class AppForm extends React.Component {
  renderInput({ input, label, meta }) {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="on" />
      </div>
    );
  }
  renderTextarea({ input, label, meta }) {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="on" />
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <h2>{this.props.title}</h2>
        <Field
          name="appName"
          component={this.renderInput}
          label="Application Name"
        />
        <Field
          name="displayName"
          component={this.renderInput}
          label="Display Name"
        />
        <Field
          name="apiDomain"
          component={this.renderInput}
          label="API Domain"
        />
        <Field
          name="description"
          component={this.renderTextarea}
          label="Description"
        />

        <button className="ui button primary">Enviar</button>
      </form>
    );
  }
}

export default reduxForm({ form: "appForm", validate: null })(AppForm);
