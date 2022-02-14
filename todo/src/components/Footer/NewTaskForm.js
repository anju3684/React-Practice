import React, { useState } from "react";

const NewTaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('todo')) || []);
  // console.log(taskList)

  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onAddTaskHandler = (event) => {
    // event.preventDefault();

    if (event.key === "Enter") {
      if (enteredTitle.trim().length === 0) {
        alert("invalid");
        return;
      }
      // console.log(enteredTitle);
      setTaskList((preState) => {
        return [
          ...preState,
          {
            id:Math.random().toString(),
            title : enteredTitle,
            completed : false
          }
        ]
      })
      // props.onAddTask(enteredTitle)
      
      // props.onEscape();
      setEnteredTitle("");
    }
    if (event.key === "Escape") {
      console.log("hello");
      props.onEscape();
      return;
    }
  };
  localStorage.setItem('todo', JSON.stringify(taskList));

  return (
    <div>
      <input
        placeholder="enter new task"
        type="text"
        value={enteredTitle}
        onChange={onTitleChangeHandler}
        onKeyDown={onAddTaskHandler}
      />
    </div>
  );
};

export default NewTaskForm;
