import categoreis from "../ExpenseCategories";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpensesFilter = ({ onSelectedCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelectedCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categoreis.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpensesFilter;
