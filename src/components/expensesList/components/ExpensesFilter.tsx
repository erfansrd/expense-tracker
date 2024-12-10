
interface Props {
    onSelectedCategory: (category: string) => void;
}

const ExpensesFilter = ({onSelectedCategory}: Props) => {
  return (
    <>
        <select className="form-select" onChange={(event) => onSelectedCategory(event.target.value)}>
            <option value="">All Categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>    
        </select>
    </>
  )
}

export default ExpensesFilter