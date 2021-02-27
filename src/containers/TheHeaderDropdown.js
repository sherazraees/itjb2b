import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { firebaseSignOut } from "../common/Firebase";
import { Trans } from "react-i18next";

const TheHeaderDropdown = () => {
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={"male_avatar-512.png"}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={() => firebaseSignOut()}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          <Trans i18nKey="header.1">
            Switch to English
          </Trans>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={() => firebaseSignOut()}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Esci
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
