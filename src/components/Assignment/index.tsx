import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

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
  // const assignment = assignmentsList[index];

  // function to delete the line of assignment
  const deleteHandler = () => {
    setAssignments(
      assignmentsList.filter(a => a.name !== assignment.name)
    );
  };

  // function to change the complete status of the assignment
  const completeHandler = () => {
    setAssignments(
      assignmentsList.map(a =>
        a.name === assignment.name
          ? {...a, complete: !a.complete}
          : a
      )
    );
  };

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={completeHandler}>
        {
          assignment.complete === false
            ? <div />
            : <BsFillCheckCircleFill size={20} />
        }
      </button>

      <p className={
        assignment.complete === false
          ? ""
          : `${styles.textCompleted}`}
      >
        {assignment.name}
      </p>

      <button className={styles.deleteButton} onClick={deleteHandler}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
