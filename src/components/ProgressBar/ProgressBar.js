import React from "react";
import "./style.css";
import { ProgressBar } from "react-bootstrap";

function Progress() {
  return (
    <div className="progressBar">
      <div className="progressBar-text">Price of 30$ ksdjsdjk</div>
      <div className="progressBar-bar">
        <ProgressBar striped variant="danger" now={60} />
      </div>
    </div>
  );
}

export default Progress;
