import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import React from "react";

function App() {
  const [input, setInput] = React.useState("");

  return (
    <>
      <Header input={input} setInput={setInput} />
      <Assignments />
    </>
  );
}

export default App;
