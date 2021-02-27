import CIcon from "@coreui/icons-react";
import { CToggler } from "@coreui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function DarkMode() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div>
      <CToggler
        inHeader
        className="ml-1"
        onClick={() => dispatch({ type: "set", darkMode: !darkMode })}
        title="Toggle Light/Dark Mode"
      >
        <CIcon
          name="cil-moon"
          className="c-d-dark-none"
          alt="CoreUI Icons Moon"
        />
        <CIcon
          name="cil-sun"
          className="c-d-default-none"
          alt="CoreUI Icons Sun"
        />
      </CToggler>
    </div>
  );
}

export default DarkMode;
