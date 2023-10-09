import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Assign = {
  name: string;
  complete: boolean;
};
type Props = {
  key: number;
  assignment: Assign;
}

export function Assignment({ assignment }: Props) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{assignment.name}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
