import React, { Component } from "react";
import ReactDOM from "react-dom";

export default function PortalDemo() {
  return ReactDOM.createPortal(
    <h3>React Portals</h3>,
    document.getElementById("portal-root")
  );
}
