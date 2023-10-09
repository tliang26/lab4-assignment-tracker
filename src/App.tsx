import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

type Assign = {
  name: string;
  complete: boolean;
};

function App() {
  const [input, setInput] = useState("");
  const [assignments, setAssignments] = useState<Assign[]>([]);

  return (
    <>
      <Header
        input={input}
        setInput={setInput}
        assignments={assignments}
        setAssignments={setAssignments}
      />
      <Assignments 
        assignments={assignments}
        setAssignments={setAssignments}
      />
    </>
  );
}

export default App;