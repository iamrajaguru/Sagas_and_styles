import React, { Component } from "react";
import ContextHooks from "./ContextHook";
export const TestContextOne = React.createContext();
export const TestContextTwo = React.createContext();
export class App extends Component {
  render() {
    return (
      <div>
        <TestContextOne.Provider value="Hooks One">
          <TestContextTwo.Provider value="Hooks Two">
            <ContextHooks />
          </TestContextTwo.Provider>
        </TestContextOne.Provider>
      </div>
    );
  }
}

export default App;
