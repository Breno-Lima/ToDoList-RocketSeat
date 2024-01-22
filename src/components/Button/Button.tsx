import styles from './Button.module.css';
import Plus from '../../assets/plus.svg';

interface ButtonProps {
  onCreateNewTask: () => void;
}

export default function Button({ onCreateNewTask }: ButtonProps) {
  return (
    <button onClick={onCreateNewTask} className={styles.button}>
      Criar <img className={styles.iconPlus} src={Plus} alt="" />
    </button>
  );
}
