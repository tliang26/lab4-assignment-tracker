// STYLES
import styles from "./assignment.module.css";

// ICONS
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

// DATA TYPES
type Assign = {
  id: string;
  name: string;
  due: Date;
  complete: boolean;
};
type Props = {
  assignment: Assign;
  assignmentsList: Assign[];
  setAssignments: (a: Assign[]) => void;
}

// ASSIGNMENT COMPONENT
export function Assignment({ assignment, assignmentsList, setAssignments }: Props) {

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

  // function to calculate how many days until due date
  const calculateDays = (dueDate: Date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    let now = new Date();
    let timeDiff = Math.abs(dueDate.getTime() - now.getTime());
    return Math.round(timeDiff / oneDay);
  };

  // function to generate due date message
  const generateMessage = (days: number) => {
    let message = "";
    if (days === 0) {
      message = "Due: today";
    } else if (days === 1) {
      message = "Due: tomorrow";
    } else if (days > 1) {
      message = `Due: ${days} days`;
    } else {
      message = "Overdue!"
    }
    return message;
  };

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={completeHandler}>
        {assignment.complete === false
          ? <div />
          : <BsFillCheckCircleFill size={20} />
        }
      </button>

      <p className={
        assignment.complete === false
          ? ""
          : styles.textCompleted}
      >
        {assignment.name}
        <span className={
          calculateDays(assignment.due) > 1
            ? styles.dueBubble
            : `${styles.dueBubble} ${styles.dueSoonBubble}`
        }>
          {generateMessage(calculateDays(assignment.due))}
        </span>
      </p>

      <button className={styles.deleteButton} onClick={deleteHandler}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
