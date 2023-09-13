import React, { useState } from "react";

import "./App.css";
import BComponent from "./Components/BComponent";
import { CardWithForm } from "./Components/Card";

function App() {
  return (
    <>
      <BComponent />
      <CardWithForm/>
    </>
  );
}

export default App;
