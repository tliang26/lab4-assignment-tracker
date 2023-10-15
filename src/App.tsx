// REACT
import { useState } from "react";

// COMPONENTS
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
// import DatePickerDialog from "./components/Test";

// DATA TYPES
type Assign = {
  id: string;
  name: string;
  due: Date;
  complete: boolean;
};

// APP COMPONENT
function App() {
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
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
  // return (
  //   <>
  //     <DatePickerDialog />
  //   </>
  // );
}

export default App;