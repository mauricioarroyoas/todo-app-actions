import styles from "../styles/Todo.module.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { tasks } from "../data/Tasks";
import type { Task } from "../Types/Task";
import { useReducer } from "react";

const Todo: React.FC = () => {
  const [tasksStored, dispatch] = useReducer(taskReducer, tasks);

  const handleOnClikAdd = (taskName: string) => {
    dispatch({ type: "add", name: taskName })
  }

  const handlOnClickDelete = (id: number) => {
    dispatch({ type: "delete", id: id })
  }

  const handleOnClickTask = (id: number) => {
    dispatch({ type: "change", id: id })
  }
  return (
    <div className={styles.todo}>
      <h4 className={styles.title}>Todo List</h4>
      <AddTask onClickAdd={handleOnClikAdd} />
      <TaskList tasks={tasksStored} onClickTask={handleOnClickTask} onClickDelete={handlOnClickDelete} />
    </div>
  );
};

export default Todo;

const taskReducer = (tasks: Task[], action: { type: string, name?: string, id?: number }) => {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: (tasks.length + 1),
          name: action.name,
          completed: false,
        } as Task
      ];
    }
    case "change": {
      return tasks.map((currentTask) => {
        const task = currentTask.id === action.id ? { ...currentTask, completed: !(currentTask.completed) } : currentTask
        return task;
      })
    }

    case "delete": {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error(`nknown action:  ${action.type}`);
    }
  }
}

