import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
  CNavbarNav,
  CNavLink,
} from "@coreui/react";

// routes config
import routes from "../routes";

import { TheHeaderDropdown } from "./index";

import Cerca from "src/common/Cerca";
import DarkMode from "src/common/DarkMode";
import LanguageSwitcher from "src/common/LanguageSwitcher";
import ProgressBar from "src/components/ProgressBar";
import Cart from "src/components/Cart";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <img
          src="logo_itj.png"
          alt="Italjapan Logo"
          style={{
            height: 40,
          }}
        />
      </CHeaderBrand>

      <CHeaderNav className="mr-auto">
        <Cerca />
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <ProgressBar />
        <Cart />
        <DarkMode />
        <LanguageSwitcher />
        <TheHeaderDropdown />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <CNavbarNav className="border-0 c-subheader-nav m-0 px-0 px-md-3">
          <CNavLink style={{ padding: "10px" }}>Home</CNavLink>
          <CNavLink style={{ padding: "10px" }}>Contact</CNavLink>
          <CNavLink style={{ padding: "10px" }}>Address</CNavLink>
        </CNavbarNav>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;
