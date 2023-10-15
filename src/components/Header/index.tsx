// STYLES
import styles from "./header.module.css";
import 'react-day-picker/dist/style.css';

// ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";

// REACT
import React, { useState } from 'react';

// HELPER FUNCTIONS AND LIBRARIES
import { uppercase } from "../../helpers/stringHelpers";
import { DayPicker } from 'react-day-picker';

// import React, { useRef, useState } from 'react';
// import FocusTrap from 'focus-trap-react';
// import { usePopper } from 'react-popper';

// DATA TYPES
type Assign = {
  id: string;
  name: string;
  due: Date;
  complete: boolean;
};
type Props = {
  input: string;
  setInput: (s: string) => void;
  selectedDate: Date;
  setSelectedDate: (d: Date) => void;
  assignments: Assign[];
  setAssignments: (a: Assign[]) => void;
};

// HEADER COMPONENT
export function Header({ input, setInput, selectedDate, setSelectedDate, assignments, setAssignments }: Props) {

  // create boolean variable for whether the datepicker popper is open or not
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  // function to select a date from the datepicker
  const selectDateHandler = () => {
    setSelectedDate(selectedDate);
    setIsPopperOpen(false);
  }
  
  // function to add a new assignment and clear input field
  const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAssignments([...assignments, {
      id: "random",
      name: input, 
      due: selectedDate,
      complete: false}]);
    setInput("");
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={addHandler}>
        <input
          type="text"
          name="assignment"
          placeholder="Add a new assignment"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />

        <div className={styles.popperButton}>
          <button type="button" onClick={() => setIsPopperOpen(!isPopperOpen)}>
            <AiOutlineCalendar size={20} />
          </button>
          {isPopperOpen
            ? <div className={styles.popper}>
              <DayPicker
                initialFocus={isPopperOpen}
                mode="single"
                selected={selectedDate}
                onSelect={selectDateHandler}
              />
            </div>
            : <div></div>
          }
        </div>

        <button disabled={input.trim().length === 0 ? true : false}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
