import {
  CButton,
  CCol,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupAppend,
} from "@coreui/react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

function Cerca() {
  const { t } = useTranslation();

  return (
    <div>
      <CForm action="" method="post" className="form-horizontal">
        <CCol sm="12">
          <CInputGroup style={{ marginLeft: "5%" }}>
            <CInput id="cerca" name="cerca" placeholder={t("cerca.1")} />
            {/* <CInputGroupAppend style={{ marginRight: "5px" }}> */}
            <CButton
              type="button"
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              <Trans i18nKey="cerca.1">Cerca</Trans>
            </CButton>
            {/* </CInputGroupAppend> */}
          </CInputGroup>
        </CCol>
      </CForm>
    </div>
  );
}

export default Cerca;
