import React, { Component } from "react";
import { UserProvider } from "./UserContext";
import { NestedComponent } from "./NestedComponent";
export const TestContext = React.createContext();

export class App extends Component {
  render() {
    return (
      <div>
        <UserProvider value={{ name: "raja" }}>
          <TestContext.Provider value={"Vis"}>
            <NestedComponent />
          </TestContext.Provider>
        </UserProvider>
      </div>
    );
  }
}

export default App;
