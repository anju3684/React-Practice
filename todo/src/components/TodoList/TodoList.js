import React, {useState} from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css"

const TodoList = (props) => {

  let todoList = []
  const getTodoList = () => {
    todoList =JSON.parse(localStorage.getItem('todo'))
  }
  
  

  return (
    <div className={`${styles.TodoListStyle}`}>
      {getTodoList()}
      {todoList.map((d) => {
        return (
          <TodoItem title = {d.title} key={d.id} completed={d.completed} />
        );
      })}
    </div>
  );
};

export default TodoList;
