import React, {useState} from 'react';
import NewTaskForm from './NewTaskForm';

const Footer = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  
  const forwardTaskToList = (task) =>{
    props.getTask(task)

  }
  const startAddingHandler = () => {
    setIsAdding(true)
  }
  const stopAddingHandler = () => {
    setIsAdding(false)
  }
  return <div>
    {!isAdding && <button onClick={startAddingHandler}>+</button>}
    {isAdding && <NewTaskForm onEscape = {stopAddingHandler} onAddTask={forwardTaskToList}/>}
      
  </div>;
};

export default Footer;
