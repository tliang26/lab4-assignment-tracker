import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Assign = {
  name: string;
  complete: boolean;
};
type Props = {
  assignments: Assign[];
  setAssignments: (a: Assign[]) => void;
}

export function Assignments({ assignments }: Props) {
  let numCreatedAssign = assignments.length;
  let numCompletedAssign = assignments.filter(x => x.complete == true).length;

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
            return <Assignment key={index} assignment={assignment}/>;
          })
        }
      </div>
    </section>
  );
}
