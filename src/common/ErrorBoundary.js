import React from "react";

import * as Sentry from "@sentry/react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <CContainer
          style={{
            margin: "auto",
            width: "100%",
            position: "relative",
            top: "50px",
          }}
        >
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                  <b>Sorry, there is a bug...</b>
                  <br />
                  The technical support team already received a message, don't
                  worry!
                </CCardHeader>
                <CCardBody>
                  <img
                    src="/bug.jpg"
                    alt="Bug"
                    style={{ width: "90%", height: "auto" }}
                  />
                  <CRow>
                    <CCol sm="12" className="center-block text-center" >Click here to come back to home:</CCol>
                    <CCol sm="12" className="center-block text-center">
                      <a href="/">
                        <CButton color="primary" className="mt-3">
                          Home Page
                        </CButton>
                      </a>
                    </CCol>
                  </CRow>
                </CCardBody>
                <CCardFooter>Copyright © Inqubit 2020</CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      );
    }

    return this.props.children;
  }
}
