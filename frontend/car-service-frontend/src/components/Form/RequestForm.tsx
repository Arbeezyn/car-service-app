import styles from "./RequestForm.module.css";
import RequestFormInterface from "../../../interface/RequestForm.interface";
import { useForm } from "react-hook-form";

import axios from "axios";

export default function RequestForm() {
  const { register, handleSubmit } = useForm<RequestFormInterface>();

  const onSubmit = (data: RequestFormInterface) => {
    axios
      .post("http://localhost:4444/request", data)
      .then((response) => {
        if (response.status === 200) {
          alert("Заявка успешно отправлена");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Оставить заявку</h2>
        <div className={styles.name}>
          <label htmlFor="name">Имя</label>
          <input
            placeholder="Как вас называть?"
            {...register("name")}
            required
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input placeholder="Введите e-mail" {...register("email")} required />
        </div>
        <div className={styles.phone}>
          <label htmlFor="phone">Телефон</label>
          <input
            placeholder="Введите ваш телефон"
            {...register("phone")}
            required
          />
        </div>
        <div className={styles.carModel}>
          <label htmlFor="carModel">Модель автомобиля</label>
          <input
            placeholder="Введите модель автомобиля"
            {...register("carModel")}
            required
          />
        </div>
        <div className={styles.breakdownType}>
          <label htmlFor="breakdownType">Тип обслуживания</label>
          <select {...register("breakdownType")} required>
            <option value="" disabled selected hidden>
              Выберите тип обслуживания
            </option>
            <option value="Ремонт">Ремонт</option>
            <option value="Обслуживание">Обслуживание</option>
            <option value="Диагностика">Диагностика</option>
          </select>
        </div>
        <div className={styles.message}>
          <label htmlFor="description">Описание проблемы</label>
          <textarea
            placeholder="Кратко опишите вашу проблему"
            {...register("message")}
            required
          />
        </div>
        <div className={styles.button}>
          <button>Отправить</button>
        </div>
      </form>
    </div>
  );
}
