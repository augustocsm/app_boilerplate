import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "semantic-ui-react";
import ConfirmModal from "./ConfirmModal";

const SaveButton = props => {
  const { t } = useTranslation();

  const [resource, setResource] = useState({ modal: { isOpened: false } });

  const { touched, errors, submitForm } = props;

  const rederModalActions = submitBtn => {
    return (
      <>
        <button onClick={() => riseModal(false)} className="ui button negative">
          {t("btn.no")}
        </button>
        {submitBtn}
      </>
    );
  };

  const riseModal = isRised => {
    setResource({
      modal: { isOpened: isRised }
    });
  };

  const renderSaveBtn = isTrue => {
    if (isTrue) {
      return (
        <div
          className="ui button primary"
          onClick={e => {
            riseModal(true);
          }}
        >
          {t("btn.save")}
        </div>
      );
    } else {
      return <div className="ui button">{t("btn.save")}</div>;
    }
  };

  const setBtnStatus = (touched, errors) => {
    if (Object.keys(touched).length && !Object.keys(errors).length) {
      return true;
    }
    if (Object.keys(errors).length) {
      return false;
    }

    return false;
  };

  const renderSubmitBtn = submitForm => {
    return (
      <Button
        onClick={submitForm}
        positive
        labelPosition="right"
        icon="checkmark"
        content={t("btn.confirm")}
      />
    );
  };

  return (
    <div>
      {renderSaveBtn(setBtnStatus(touched, errors))}
      <ConfirmModal
        status={resource.modal.isOpened}
        actions={rederModalActions}
        header={t("apps.form.modal.title")}
        content={t("apps.form.modal.content")}
        submitBtn={renderSubmitBtn(submitForm)}
      />
    </div>
  );
};

export default SaveButton;
