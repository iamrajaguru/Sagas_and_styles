import React, { Component } from "react";
import ContextApp from "../context/App";
import HookContext from "../context/Hookcontext/App";
import history from "../store/history";
import Firechat from "../FireChat/FireChat";
import PortalDemo from "../Portals/PortalDemo";
export default class Home extends Component {
  componentDidMount() {
    console.log("ComponentDidMount");
    this.props.getTodo();
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        Home
        <button onClick={() => history.push("/context")}>Hook</button>
        {/* <ContextApp />
        <HookContext /> */}
        {/* <PortalDemo /> */}
        <Firechat />
      </div>
    );
  }
}
