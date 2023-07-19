import React from "react";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";
import { Conversition } from "./components/conversition";

function App() {
  return (
    <div className="container">
      <Conversition />
    </div>
  );
}

export default App;
