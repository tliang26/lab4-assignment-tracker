// STYLES
import styles from "./header.module.css";
import 'react-day-picker/dist/style.css';
import './day-picker.css'

// ICONS
import { AiOutlinePlusCircle, AiOutlineCalendar } from "react-icons/ai";

// REACT
import React, { useState } from 'react';

// HELPER FUNCTIONS AND LIBRARIES
import { uppercase } from "../../helpers/stringHelpers";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

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
  const selectDateHandler = (day: Date) => {
    let endOfDay = day;
    endOfDay.setHours(23, 59, 59);
    setSelectedDate(endOfDay);
    setIsPopperOpen(false);
  }
  
  // function to add a new assignment and clear input field
  const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAssignments([...assignments, {
      id: window.crypto.randomUUID(),
      name: input, 
      due: selectedDate,
      complete: false}]);
    setInput("");
    setSelectedDate(new Date("2023-01-01"));
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
          <button
            type="button"
            className={styles.formButton}
            onClick={() => setIsPopperOpen(!isPopperOpen)}
          >
            {selectedDate < new Date()
              ? <AiOutlineCalendar size={20} />
              : `Due: ${format(selectedDate, 'PP')}`
            }
          </button>
          {isPopperOpen
            ? <div className={styles.popper}>
                <DayPicker
                  initialFocus={isPopperOpen}
                  mode="single"
                  fromDate={new Date()}
                  selected={selectedDate}
                  onDayClick={selectDateHandler}
                />
              </div>
            : <></>
          }
        </div>

        <button
          className={styles.formButton}
          disabled={(input.trim().length === 0) || (selectedDate < new Date()) 
            ? true 
            : false
          }
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}