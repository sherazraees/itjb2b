import CIcon from "@coreui/icons-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const setLanguage = (state) => dispatch({ type: "set", language: state });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  switch (language) {
    case "it":
      return (
        <CIcon
          name="cif-gb"
          alt="ENG Flag"
          onClick={() => changeLanguage("en")}
        />
      );
    case "en":
      return (
        <CIcon
          name="cif-it"
          alt="ITA Flag"
          onClick={() => changeLanguage("it")}
        />
      );
    default:
      return null;
  }
}

export default LanguageSwitcher;
