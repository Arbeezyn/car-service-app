import { Link } from "@tanstack/react-router";
import styles from "./PickMenu.module.css";

export default function PickMenu() {
  return (
    <div className={styles.buttons}>
      <h2>Выберите раздел</h2>

      <Link to="/admin/requests" className={styles.link}>
        Заявки
      </Link>

      <Link to="/admin/archive" className={styles.link}>
        Архив
      </Link>
    </div>
  );
}
