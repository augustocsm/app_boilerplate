import React from "react";
import AppCreate from "./applications/AppCreate";
class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <AppCreate />
      </div>
    );
  }
}

export default App;
