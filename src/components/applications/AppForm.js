//import { Field, reduxForm } from "redux-form";
import React from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import { FormField, SaveButton, CrudBar, PlaceHolder } from "./common";

const AppForm = props => {
  const { t } = useTranslation();

  const renderAdminBtn = app => {
    if (!app) {
      return null;
    }
    return (
      <div className="ui right floated header">
        <CrudBar app={app} list read delete />
      </div>
    );
  };

  const validate = formValues => {
    const errors = {};

    if (!formValues.appName) {
      errors.appName = t("apps.form.validation.emptyAppName");
    }

    if (!formValues.displayName) {
      errors.displayName = t("apps.form.validation.emptyDisplayName");
    }

    if (!formValues.apiDomain) {
      errors.apiDomain = t("apps.form.validation.emptyApiDomain");
    }

    return errors;
  };

  if (!props.initialValues) {
    return (
      <>
        <PlaceHolder />
      </>
    );
  }

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validate={validate}
      render={({ errors, touched, submitForm }) => (
        <div className="ui container">
          <div className="ui segment">
            <Form className="ui fluid form">
              <h2 className="ui left floated header">{t("apps.form.title")}</h2>

              {renderAdminBtn(props.initialValues)}

              <div className="ui clearing divider"></div>
              <div className="ui two column doubling stackable grid">
                <div className="column ">
                  <FormField name="appName" label={t("apps.form.field.name")} />
                </div>

                <div className="column">
                  <FormField
                    name="displayName"
                    label={t("apps.form.field.displayName")}
                  />
                </div>

                <div className=" sixteen wide column ">
                  <FormField
                    name="apiDomain"
                    label={t("apps.form.field.apiDomain")}
                  />
                </div>

                <div className="column">
                  <FormField
                    component="textarea"
                    name="description"
                    label={t("apps.form.field.description")}
                  />
                </div>

                <div className=" sixteen wide column "></div>
              </div>
            </Form>
            <SaveButton
              touched={touched}
              errors={errors}
              submitForm={submitForm}
            />
          </div>
        </div>
      )}
    />
  );
};

export default AppForm;
