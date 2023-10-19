// REACT
import { useState } from "react";

// COMPONENTS
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

// DATA TYPES
type Assign = {
  id: string;
  name: string;
  due: Date;
  complete: boolean;
};

// APP COMPONENT
export default function App() {
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date("2023-01-01"));
  const [assignments, setAssignments] = useState<Assign[]>([]);

  return (
    <>
      <Header
        input={input}
        setInput={setInput}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
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