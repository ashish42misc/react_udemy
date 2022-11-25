import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.filteredExpenseItems.length === 0) {
    return <h2 class="expenses-list__fallback">No items found</h2>;
  }
  return (
    <ul class="expenses-list">
      {props.filteredExpenseItems.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
