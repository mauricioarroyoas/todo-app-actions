import styles from "../styles/TaskCard.module.css";
import type { Task } from "../Types/Task";

interface TaskCardProps {
  task: Task;
  onClickTask: (id: number) => void;
  onClickDelete: (id: number) => void;
}
const TaskCard = ({ task, onClickTask, onClickDelete }: TaskCardProps) => {
  return (
    <div className={styles.taskCard}>
      <span className={`${styles.label} ${task.completed ? styles.completed : ""}`} onClick={() => onClickTask(task.id)}>{task.name}</span>
      <button className={styles.deleteButton} onClick={() => onClickDelete(task.id)}> Delete</button>
    </div>
  );
};

export default TaskCard;
