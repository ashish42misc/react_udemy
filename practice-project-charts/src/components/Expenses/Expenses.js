import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [expenseYear, setExpenseYear] = useState("2020");

  const expenseYearSelectedHandler = (yearSelected) => {
    setExpenseYear(yearSelected);
  };

  const filteredExpenses = props.items.filter(
    (expenseItem) =>
      new Date(expenseItem.date).getFullYear().toString() === expenseYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onExpenseYearSelected={expenseYearSelectedHandler}
          selected={expenseYear}
        />
        <ExpensesChart filteredExpenseItems={filteredExpenses} />
        <ExpenseList filteredExpenseItems={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
