import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            value={charge}
            onChange={handleCharge}
            placeholder="e.g. Rent"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmount}
            placeholder="e.g. 1000"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Edit" : "Submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
