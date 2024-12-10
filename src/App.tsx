import { useState } from "react";
import ExpensesList from "./components/expensesList/components/ExpensesList";
import ExpensesFilter from "./components/expensesList/components/ExpensesFilter";
import ExpensesForm from "./components/expensesList/components/ExpensesForm";
import { Expense } from "./components/expensesList/components/ExpensesList";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "", amount: 0, category: "" },
  ]);
  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleAddExpense = (newExpense: Expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...newExpense, id: prevExpenses.length + 1 },
    ]);
  };

  return (
    <>
      <div className="mb-5">
        <ExpensesForm onSend={handleAddExpense} />
      </div>
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
