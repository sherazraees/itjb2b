import {
  CButton
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { getFirebaseImage } from "src/common/Firebase";
import { Trans } from "react-i18next";
import ReactLoading from "react-loading";

const Dashboard = () => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) {
      getFirebaseImage("Citizen/AN3600-59E.jpg").then((url) => {
        setUrl(url);
        setLoading(false);
      });
    }
  }, [url]);

  if (loading) {
    return <ReactLoading type="spin" color="#fff" className="loading" />;
  } else {
    return (
      <>
        <CButton type="button" color="primary">
          <Trans i18nKey="cerca.1">Primary</Trans>
        </CButton>
        <CButton type="button" color="secondary">
          <Trans i18nKey="cerca.1">Secondary</Trans>
        </CButton>
      </>
    );
  }
};

export default Dashboard;
