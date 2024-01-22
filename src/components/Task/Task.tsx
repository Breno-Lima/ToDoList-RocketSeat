import React from 'react';
import { Trash } from '@phosphor-icons/react';
import styles from './styles.module.css';

interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onDeleteTask: (taskId: number) => void;
  onUpdateTask: (taskId: number, completed: boolean) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDeleteTask, onUpdateTask }) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleCheckTask = () => {
    onUpdateTask(task.id, !task.completed);
  };

  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" onClick={handleCheckTask} checked={task.completed} className={styles.task} />
      <div className={styles.containerContentTask}>
        <p className={styles.contentTask}>{task.title}</p>
        <button onClick={handleDeleteTask} className={styles.buttonTrash}>
          <Trash size={25} />
        </button>
      </div>
    </div>
  );
};

export default Task;
