import logo from "/logo.svg";
import styles from "./Logo.module.css";

export default function Logo(): JSX.Element {
  return (
    <span className={styles.logo}>
      <img src={logo} alt="logo" className={styles.logoSvg} />
      <h1 className={styles.logoText}>CarFix</h1>
    </span>
  );
}
