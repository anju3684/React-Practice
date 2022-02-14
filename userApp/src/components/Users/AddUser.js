import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from '../UI/ErrorModal'
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'Invalid Input',
        message : 'Please enter a valid name and age (non-empty value).'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title:'Invalid age',
        message : 'Please enter a valid age (>0).'
      })
      return;
    }
    // console.log(enteredAge, enteredUsername)
    props.onAddUser({
      name: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    });
    setEnteredAge("");
    setEnteredUsername("");
  };
  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const erroHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={erroHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangedHandler}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
