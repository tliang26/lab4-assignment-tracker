import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Assign = {
  name: string;
  complete: boolean;
};
type Props = {
  assignment: Assign;
  assignmentsList: Assign[];
  setAssignments: (a: Assign[]) => void;
}

export function Assignment({ assignment, assignmentsList, setAssignments }: Props) {

  // function to delete the line of assignment
  const deleteHandler = () => {
    setAssignments(
      assignmentsList.filter(a => a.name !== assignment.name)
    );
  };

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{assignment.name}</p>

      <button
        className={styles.deleteButton}
        onClick={() => deleteHandler()}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
