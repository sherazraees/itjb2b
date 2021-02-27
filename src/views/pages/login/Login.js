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
import { firebaseSignInWithEmail } from "src/common/Firebase";
import { useEffect } from "react";
import { AuthContext } from "src/common/AuthProvider";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Trans } from "react-i18next";
import LanguageSwitcher from "src/common/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  //Incredibile!!!!! Se lo tolgo lo switch non funziona don't remove
  const { i18n } = useTranslation();

  useEffect(() => {
    if (currentUser) {
      history.push("/dashboard");
    }
  }, [currentUser, history]);

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
                      firebaseSignInWithEmail(
                        event.target.email.value,
                        event.target.password.value
                      ).catch((error) => {
                        setErrorMessage(error.message);
                      });
                    }}
                  >
                    <h2>Login</h2>
                    <Trans i18nKey="login.1">
                      <p>Effettua il login per utilizzare l'applicazione</p>
                    </Trans>

                    <CInputGroup className="mt-2 mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        id="email"
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    {errorMessage && (
                      <CRow>
                        <CCol>
                          <p class="text-danger">{errorMessage}</p>
                        </CCol>
                      </CRow>
                    )}
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton
                          color="link"
                          className="px-0"
                          href="forgot_password"
                        >
                          <Trans i18nKey="login.2">Password dimenticata?</Trans>
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary p-3">
                <CCardBody className="text-center">
                  <div>
                    <h2>
                      <Trans i18nKey="login.3">Registrazione</Trans>
                    </h2>
                    <p>
                      <Trans i18nKey="login.4">
                        Questa applicazione può essere utilizzata solo dai
                        clienti di
                      </Trans>{" "}
                      Italjapan S.r.l.
                    </p>
                    <CButton
                      color="info"
                      className="mt-3"
                      active
                      tabIndex={-1}
                      href="https://italjapan.it/registrati/"
                    >
                      <Trans i18nKey="login.5">Registrati!</Trans>
                    </CButton>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
        <CRow className="justify-content-center mt-3 mb-3">
          <CCol md="10" className="text-center">
            <LanguageSwitcher />
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
};

export default Login;
