import React from "react";
import styles from "./TodoItem.module.css";
const TodoItem = (props) => {
  return (
    <div className={styles.todoItemClass}>
      <p>{props.title}</p>
      <input type='radio'/>
    </div>
  );
};

export default TodoItem;
