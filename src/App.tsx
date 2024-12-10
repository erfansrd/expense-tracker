import { useState } from "react";
import ExpensesList from "./components/expensesList/components/ExpensesList";
import ExpensesFilter from "./components/expensesList/components/ExpensesFilter";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "ccc", amount: 10, category: "Utilities" },
    { id: 3, description: "bbb", amount: 10, category: "Utilities" },
    { id: 4, description: "ggg", amount: 10, category: "Utilities" },
  ]);
  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-3">
        <ExpensesFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpensesList
        expenses={visibleCategory}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
};

export default App;
