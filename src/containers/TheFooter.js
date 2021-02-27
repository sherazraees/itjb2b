import React from "react";
import { CFooter } from "@coreui/react";
import LanguageSwitcher from "src/common/LanguageSwitcher";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mx-auto">
        <a
          href="https://italjapan.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          Italjapan S.r.l.
        </a>{" "}
        <LanguageSwitcher />
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
