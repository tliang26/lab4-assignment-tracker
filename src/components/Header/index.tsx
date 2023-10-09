import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
type Props = {
  input: string;
  setInput: (s: string) => void;
}

export function Header({input, setInput}: Props) {
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>

      <form className={styles.newAssignmentForm}>
        <input
          type="text"
          placeholder="Add a new assignment"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <button disabled={input.trim().length == 0 ? true : false}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
