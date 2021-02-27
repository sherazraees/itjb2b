import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CImg,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLink,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { firebaseResetPassword } from "src/common/Firebase";

function ForgotPassword() {
  const [showOutMessage, setShowOutMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center mb-3 mt-3">
          <CCol md="10" className="text-center">
            <CLink href="/">
              <CImg src="/logo_itj.png" width="300" />
            </CLink>
          </CCol>
        </CRow>
        <CRow className="justify-content-center">
          <CCol md="10">
            <CCardGroup>
              <CCard className="p-3">
                <CCardBody className="text-center">
                  <CForm
                    onSubmit={async (event) => {
                      event.preventDefault();
                      firebaseResetPassword(event.target.email.value)
                        .then(() => {
                          setShowOutMessage(true);
                        })
                        .catch((error) => {
                          setErrorMessage(error.message);
                        });
                    }}
                  >
                    <h2>Password Dimenticata?</h2>
                    {showOutMessage ? (
                      <CRow>
                        <CCol>
                          <p>
                            Abbiamo inviato una email con le istruzioni per il
                            reset della password.
                          </p>
                          <CLink to="/">
                            <CButton
                              type="submit"
                              color="primary"
                              className="px-4"
                            >
                              Torna alla pagina di Login
                            </CButton>
                          </CLink>
                        </CCol>
                      </CRow>
                    ) : (
                      <>
                        <p>Inserisci il tuo indirizzo email:</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            id="email"
                            type="text"
                            placeholder="Email Address"
                            autoComplete="Email Address"
                          />
                        </CInputGroup>

                        <CRow>
                          <CCol>
                            <CButton
                              type="submit"
                              color="primary"
                              className="px-4"
                            >
                              Recupera la password
                            </CButton>
                          </CCol>
                        </CRow>
                        {errorMessage && (
                          <CRow>
                            <CCol>
                              <p class="text-danger mt-1">{errorMessage}</p>
                            </CCol>
                          </CRow>
                        )}
                      </>
                    )}
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
        <CRow className="justify-content-center mt-3 mb-3">
          <CCol md="10" className="text-center">
            <p>
              Italjapan S.r.l. - Via Caracciolo 15 - 80122 Napoli (NA) ITALY
              P.IVA/ C.F.: IT08386791217 <br /> Nr. REA: NA 953805 - Cap. Soc.:
              €. 60.000,00 -{" "}
              <a
                href="https://italjapan.it/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </a>{" "}
              - Ver 0.1
            </p>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default ForgotPassword;
