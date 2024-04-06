import Logo from "./Logo/Logo";
import styles from "./Header.module.css";
import { Link } from "@tanstack/react-router";

const token = localStorage.getItem("token");

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.button}>
        <Link to="/admin">
          <button>Панель администратора</button>
        </Link>
        {token && (
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Выйти
          </button>
        )}
      </div>
    </header>
  );
}
