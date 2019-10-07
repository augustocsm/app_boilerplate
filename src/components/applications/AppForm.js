import React from "react";
import { Field, reduxForm } from "redux-form";
import CrudBar from "./common/CrudBar";
import ConfirmModal from "./common/ConfirmModal";
import RemoteSubmitButton from "./common/RemoteSubmitButton";

class AppForm extends React.Component {
  state = {
    modal: {
      open: false
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    const validationText = this.props.texts.apps.form.validation;

    return (
      <div className={className}>
        <label>
          <h5>{label}</h5>
        </label>

        <input {...input} autoComplete="on" />

        {meta.touched && meta.error && (
          <span>{validationText[meta.error]}</span>
        )}
      </div>
    );
  };

  renderTextarea({ input, label, meta }) {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>
          <h5>{label}</h5>
        </label>
        <textarea {...input} autoComplete="on" />
      </div>
    );
  }

  renderAdminBtn = app => {
    if (!app) {
      return null;
    }
    return (
      <div className="ui right floated header">
        <CrudBar app={app} list read delete />
      </div>
    );
  };

  renderSaveBtn = isTrue => {
    const { save } = this.props.texts.btn;

    if (isTrue) {
      return (
        <button
          className="ui button primary"
          onClick={e => {
            this.riseModal(true);
          }}
        >
          {save}
        </button>
      );
    } else {
      return <div className="ui button">{save}</div>;
    }
  };

  renderModalBtn = () => {
    const { no, confirm } = this.props.texts.btn;

    return (
      <>
        <button
          onClick={() => this.riseModal(false)}
          className="ui button negative"
        >
          {no}
        </button>

        <RemoteSubmitButton
          positive
          labelPosition="right"
          icon="checkmark"
          text={confirm}
          formName="appForm"
        />
      </>
    );
  };

  riseModal = isRised => {
    this.setState({
      modal: {
        open: isRised
      }
    });
  };

  render() {
    const { error, handleSubmit, initialValues, title, submitBtn } = this.props;

    const texts = this.props.texts.apps.form;

    const { open } = this.state.modal;
    return (
      <div className="ui container">
        <div className="ui segment">
          <form className="ui form error" onSubmit={handleSubmit}>
            <h2 className="ui left floated header">{title}</h2>

            {this.renderAdminBtn(initialValues)}

            <div className="ui clearing divider"></div>
            <div className="ui two column doubling stackable grid">
              <div className="column ">
                <Field
                  name="appName"
                  component={this.renderInput}
                  label={texts.field.name}
                />
              </div>

              <div className="column">
                <Field
                  name="displayName"
                  component={this.renderInput}
                  label={texts.field.displayName}
                />
              </div>

              <div className=" sixteen wide column ">
                <Field
                  name="apiDomain"
                  component={this.renderInput}
                  label={texts.field.apiDomain}
                />
              </div>

              <div className="column">
                <Field
                  name="description"
                  component={this.renderTextarea}
                  label={texts.field.description}
                />
              </div>
              {error && <strong>{error}</strong>}
              <div className=" sixteen wide column "></div>
            </div>
          </form>

          <ConfirmModal
            open={open}
            actions={this.renderModalBtn}
            header={texts.modal.title}
            content={texts.modal.content}
            submitBtn={submitBtn}
          />

          {this.renderSaveBtn(submitBtn)}
        </div>
      </div>
    );
  }
}

export const validate = formValues => {
  const errors = {};

  if (!formValues.appName) {
    errors.appName = "emptyAppName";
  }

  if (!formValues.displayName) {
    errors.displayName = "emptyDisplayName";
  }

  if (!formValues.apiDomain) {
    errors.apiDomain = "emptyApiDomain";
  }

  return errors;
};

export const validateBtn = form => {
  if (form === undefined || !form.hasOwnProperty("values")) {
    return false;
  }

  if (!Object.keys(validate(form.values)).length) {
    return true;
  }

  return false;
};

export default reduxForm({
  form: "appForm",
  validate: validate
})(AppForm);
