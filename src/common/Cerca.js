import { CButton, CCol, CForm, CInput, CInputGroup, CInputGroupAppend } from "@coreui/react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

function Cerca() {
  const { t } = useTranslation();

  return (
    <div>
      <CForm action="" method="post" className="form-horizontal">
          <CCol sm="12">
            <CInputGroup>
              <CInput
                id="cerca"
                name="cerca"
                placeholder={t('cerca.1')}
              />
              <CInputGroupAppend>
                <CButton type="button" color="primary">
                  <Trans i18nKey="cerca.1">Cerca</Trans>
                </CButton>
              </CInputGroupAppend>
            </CInputGroup>
          </CCol>
      </CForm>
    </div>
  );
}

export default Cerca;
