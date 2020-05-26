import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Issue from "./components/Issue/Issue";
import Articles from "./components/Articles/Articles";

function App() {
  return (
    <div className="app__container">
      <Header />
      <Issue />
      <Articles />
    </div>
  );
}

export default App;
