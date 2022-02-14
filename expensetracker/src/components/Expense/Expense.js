import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
export default function Expense(props) {
  // console.log(expenses)



  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.expenses.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });
  const filterChangeHandler = (selectedYear) => {
    /* onsole.log("expense.js");
        console.log(selectedYear); */
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p>No expense Found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((e) => (
      <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
    ));
  }

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* <ExpenseItem title={expenses[0].title}  amount={expenses[0].amount} date={expenses[0].date} /> */}
      {expensesContent}
    </Card>
  );
}
