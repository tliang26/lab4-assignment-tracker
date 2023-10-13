import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type Assign = {
  name: string;
  complete: boolean;
};
type Props = {
  input: string;
  setInput: (s: string) => void;
  assignments: Assign[];
  setAssignments: (a: Assign[]) => void;
};

export function Header({ input, setInput, assignments, setAssignments }: Props) {
  
  // function to add a new assignment and clear input field
  const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAssignments([...assignments, {name: `${input}`, complete: false}]);
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
        <button disabled={input.trim().length === 0 ? true : false}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
