import { useForm } from "react-hook-form";
import LoginFormInterface from "../../../interface/LoginForm.interface";
import axios from "axios";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Login.module.css";
import { useState } from "react";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Login(): JSX.Element {
  const { register, handleSubmit } = useForm<LoginFormInterface>();
  const [isHide, setIsHide] = useState<boolean>(true);

  const togglePassword = () => {
    setIsHide(!isHide);
  };

  const onSubmit = (data: LoginFormInterface) => {
    axios
      .post("http://localhost:4444/login", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Авторизация</h2>
      <div className={styles.username}>
        <label htmlFor="username">Имя пользователя</label>
        <input
          placeholder="Имя пользователя"
          {...register("username")}
          required
        />
      </div>

      <div className={styles.password}>
        <label htmlFor="password">Пароль</label>
        <input
          type={isHide ? "password" : "text"}
          placeholder="Пароль"
          {...register("password")}
          required
        />
        <i onClick={togglePassword} className={styles.eye}>
          {eye}
        </i>
      </div>

      <button type="submit" className={styles.button}>
        Войти
      </button>
    </form>
  );
}
