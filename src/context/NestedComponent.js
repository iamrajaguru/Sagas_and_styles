import React, { Component } from "react";
import { UserConsumer } from "./UserContext";
import { TestContext } from "./App";
export class NestedComponent extends Component {
  render() {
    return (
      <UserConsumer>
        {(val) => {
          return (
            <div>
              Nested{val.name}
              <TestContext.Consumer>
                {(name) => <h1>{name}</h1>}
              </TestContext.Consumer>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default NestedComponent;
