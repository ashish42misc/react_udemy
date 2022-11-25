import "./NewExpense.css";
import react, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormEditMode, setIsFormEditMode] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsFormEditMode(false);
  };

  const cancelEditModeExpenseFormHandler = () => {
    setIsFormEditMode(false);
  };
  const startEditingHandler = () => {
    setIsFormEditMode(true);
  };

  return (
    <div className="new-expense">
      {!isFormEditMode && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isFormEditMode && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditModeExpenseForm={cancelEditModeExpenseFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
