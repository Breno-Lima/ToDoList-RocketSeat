import styles from './Header.module.css'
import LogoToDo from '../../assets/LogoToDoList.svg'
export default function Header(){
    return(
        <header className={styles.header}>
            <img src={LogoToDo} alt="" />
        </header>
    )
}