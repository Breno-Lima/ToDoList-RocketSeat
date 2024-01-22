import { useState } from 'react';
import Task from './components/Task/Task';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import { ClipboardText } from '@phosphor-icons/react';
import styles from './App.module.css';

interface TaskType {
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [showTasks, setShowTasks] = useState(false);

  const handleCreateNewTask = (title: string) => {
    if (title.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: prevTasks.length + 1,
          title: title,
          completed: false,
        },
      ]);
      setShowTasks(true);
    }
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleUpdateTask = (taskId: number, completed: boolean) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const completedTasksCount = completedTasks.length;

  return (
    <div>
      <Header />
      <Input onCreateNewTask={handleCreateNewTask} />
      <section className={styles.container}>
        <div className={styles.taskCreated}>
          Tarefas criadas <div className={styles.number}>{tasks.length}</div>
        </div>
        <div className={styles.taskEnded}>
          Tarefas concluídas <div className={styles.number}>{completedTasksCount}</div>
        </div>
      </section>
      <hr className={styles.bar} />

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={handleDeleteTask}
            onUpdateTask={handleUpdateTask}
          />
        ))
      ) : (
        <div className={styles.clipBoard}>
          <ClipboardText size={80} className={styles.clipBoardIcon} />
          <span className={styles.textWarning}>Você ainda não tem tarefas cadastradas</span>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </div>
  );
}
