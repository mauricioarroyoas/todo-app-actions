import React from "react";
import type { Task } from "../Types/Task";
import TaskCard from "./TaskCard";


interface TaskListProps {
  tasks: Task[],
  onClickTask: (id: number) => void,
  onClickDelete: (id: number) => void,
}
const TaskList = ({ tasks, onClickTask, onClickDelete }: TaskListProps) => {
  return (
    <div className="taskList">
      {
        tasks.map((task) => {
          return <TaskCard key={task.id} task={task} onClickTask={onClickTask} onClickDelete={onClickDelete} />
        })
      }
    </div>
  );
}

export default TaskList;