import React, { Component, useContext } from "react";
import { TestContextOne, TestContextTwo } from "./App";

function ContextHooks() {
  const one = useContext(TestContextOne);
  const two = useContext(TestContextTwo);
  return (
    <div>
      {one} -{two}
    </div>
  );
}

export default ContextHooks;
