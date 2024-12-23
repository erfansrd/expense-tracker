export interface Expense {
  id?: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpensesList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <>
      <table className="table table-primary table-bordered border-info">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id ?? 0)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td>totel</td>
            <td>
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpensesList;
