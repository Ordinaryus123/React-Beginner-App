import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../UI/ExpensesFilter";
import "../UI/ExpensesFilter.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  let filterInfoText = "2019, 2021 and 22 is hidden";
  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 and 22 is hidden";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 and 22 is hidden";
  } else if (filteredYear === "2022") {
    filterInfoText = "2019, 2020 and 21 is hidden";
  }
  const filterChangeHandler = (selectedYear) => {
    console.log("expenses.js");
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}
export default Expenses;
