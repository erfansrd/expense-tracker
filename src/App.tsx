import { useState } from "react";
import ExpensesList from "./components/expensesList/components/ExpensesList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "asdaf" },
    { id: 2, description: "ccc", amount: 10, category: "asdaf" },
    { id: 3, description: "bbb", amount: 10, category: "asdaf" },
    { id: 4, description: "ggg", amount: 10, category: "asdaf" },
  ]);
  return (
    <>
      <ExpensesList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))}
      />
    </>
  );
};

export default App;
