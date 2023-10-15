// STYLES
import styles from "./assignments.module.css";

// COMPONENTS
import { Assignment } from "../Assignment";

// DATA TYPES
type Assign = {
  id: string;
  name: string;
  due: Date;
  complete: boolean;
};
type Props = {
  assignments: Assign[];
  setAssignments: (a: Assign[]) => void;
}

// ASSIGNMENTS COMPONENT
export function Assignments({ assignments, setAssignments }: Props) {
  let numCreatedAssign = assignments.length;
  let numCompletedAssign = assignments.filter(a => a.complete === true).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{numCreatedAssign}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{numCompletedAssign} of {numCreatedAssign}</span>
        </div>
      </header>

      <div className={styles.list}>
        {
          assignments.map((assignment, index) => {
            return (
              <Assignment 
                assignment={assignment}
                assignmentsList={assignments}
                setAssignments={setAssignments}
                key={index}
              />
            );
          })
        }
      </div>
    </section>
  );
}
