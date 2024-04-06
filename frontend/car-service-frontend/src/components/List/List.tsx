import React from "react";
import ItemInterface from "../../../interface/Item.interface";
import styles from "./List.module.css";
import axios from "axios";
import { Router, useRouter } from "@tanstack/react-router";

const List: React.FC<{ data: ItemInterface[] }> = ({ data }) => {
  const onSubmit = (id: string) => {
    axios
      .post("http://localhost:4444/request/transfer/" + id)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDelete = (id: string) => {
    axios
      .delete("http://localhost:4444/archive/" + id)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const router = useRouter();
  const currentPath = router.state.location.pathname;

  console.log(currentPath);
  return (
    <>
      {data.map((item, index) => (
        <div className={styles.item} key={index}>
          <p className={styles.carModel}>Модель машины: {item.carModel}</p>
          <p className={styles.breakdownType}>
            Тип ремонта: {item.breakdownType}
          </p>
          <div className={styles.message}>
            <p>Описание проблемы:</p>
            <textarea
              rows={5}
              readOnly
              onFocus={(event) => event.target.select()}
              value={item.message}
            >
              {item.message}
            </textarea>
          </div>
          <p className={styles.name}>Имя заказчика: {item.name}</p>
          <p className={styles.phone}>Телефон: {item.phone}</p>
          <p className={styles.email}>Email: {item.email}</p>
          {currentPath === "/admin/requests" ? (
            <button
              onClick={() => onSubmit(item._id)}
              className={styles.button}
            >
              Отправить в архив
            </button>
          ) : (
            <button
              onClick={() => onDelete(item._id)}
              className={styles.button + " " + styles.delete}
            >
              Удалить из архива
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default List;
