import React from "react";
import Navigation from "./containers/Navigation";
import Board from "./containers/Board";

const App = () => {
  const renderComponent = () => {
    return (
      <div>
        <Navigation />
        <Board />
      </div>
    );
  };

  return renderComponent();
};

export default App;
