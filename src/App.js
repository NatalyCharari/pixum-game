import React from "react";
import Navigation from "./containers/Navigation";

const App = () => {
  const renderComponent = () => {
    return (
      <div>
        <Navigation />
      </div>
    );
  };

  return renderComponent();
};

export default App;
