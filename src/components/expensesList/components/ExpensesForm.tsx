import { useFormik } from "formik";
import * as Yup from "yup";
import categoreis from "../ExpenseCategories";
import { Expense } from "./ExpensesList";

interface Props {
  onSend: (data: Expense) => void;
}

const ExpensesForm = ({ onSend }: Props) => {
  const schema = Yup.object({
    description: Yup.string()
      .required("Description is required.")
      .min(3, "Must be 3 characters"),
    amount: Yup.number().required("Amount is required"),
    category: Yup.mixed().required("required"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      amount: 0,
      category: "",
    },

    validationSchema: schema,

    onSubmit: (values) => {
      onSend(values); // ارسال داده‌ها
      formik.resetForm(); // ریست کردن فرم
    },
  });

  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.errors.description && (
            <p className="text-danger">{formik.errors.description}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="amount"
            value={formik.values.amount}
          />
          {formik.errors.amount && (
            <p className="text-danger">{formik.errors.amount}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            name="category"
            id="categiory"
            className="form-select"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option value=""></option>
            {categoreis.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {formik.errors.category && (
            <p className="text-danger">{formik.errors.category}</p>
          )}
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpensesForm;
