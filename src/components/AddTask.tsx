import { useState } from "react";
import styles from "../styles/AddTask.module.css";

interface AddTaskProps {
  onClickAdd: (taskName: string) => void
}
const AddTask = ({ onClickAdd }: AddTaskProps) => {
  const [taskName, setTaskName] = useState<string>("");

  return (
    <div className={styles.addTask}>
      <input
        type="text"
        placeholder="Add a task"
        className={styles.input}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className={styles.button} onClick={() => {onClickAdd(taskName); setTaskName("");}}>Add</button>
    </div>
  );
};

export default AddTask;
