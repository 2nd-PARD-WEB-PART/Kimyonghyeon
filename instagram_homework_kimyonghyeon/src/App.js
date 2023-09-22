import React from "react";
import './App.css';
import Top from "./Top";
import Body from "./Body";

function App() {
  return (
      <div style={{ background: "var(--Dark-white, #FAFAFA)" }}>
          <Top></Top>
          <Body></Body>
      </div>
  );
}

export default App;
