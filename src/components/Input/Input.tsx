import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Input.module.css';

interface InputProps {
  onCreateNewTask: (title: string) => void;
}

export default function Input({ onCreateNewTask }: InputProps) {
  const [title, setTitle] = useState('');

  const handleCreateNewTask = () => {
    if (title.trim() !== '') {
      onCreateNewTask(title);
      setTitle('');
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <Button onCreateNewTask={handleCreateNewTask} />
    </div>
  );
}
