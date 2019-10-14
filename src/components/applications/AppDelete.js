/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchApp, deleteApp } from "./../../actions/apps";
import { useTranslation } from "react-i18next";
import { Button } from "semantic-ui-react";
import { ConfirmModal } from "./common";

const AppDelete = props => {
  const { t } = useTranslation();

  useEffect(() => {
    props.fetchApp(props.match.params.id);
  }, []);

  const renderConfirmBtn = () => {
    const id = props.match.params.id;

    return (
      <>
        <Button onClick={props.history.goBack} negative>
          {t("btn.no")}
        </Button>

        <Button
          onClick={() => props.deleteApp(id)}
          positive
          labelPosition="right"
          icon="checkmark"
          content={t("btn.yesDelete")}
        />
      </>
    );
  };

  return (
    <div>
      <ConfirmModal
        status={true}
        header={t("apps.delete.modal.title")}
        content={t("apps.delete.modal.content")}
        actions={renderConfirmBtn}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { app: state.apps[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchApp, deleteApp }
)(AppDelete);
