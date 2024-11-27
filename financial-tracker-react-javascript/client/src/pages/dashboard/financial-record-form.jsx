// import { useState } from "react";
// import { useUser } from "@clerk/clerk-react";
// import { useFinancialRecords } from "../../contexts/financial-record-context";

// export const FinancialRecordForm = () => {
//   const [description, setDescription] = useState("");
//   const [amount, setAmount] = useState("");
//   const [category, setCategory] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const { addRecord } = useFinancialRecords();
//   const { user } = useUser();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newRecord = {
//       userId: user?.id ?? "",
//       date: new Date(),
//       description: description,
//       amount: parseFloat(amount),
//       category: category,
//       paymentMethod: paymentMethod,
//     };

//     addRecord(newRecord);
//     setDescription("");
//     setAmount("");
//     setCategory("");
//     setPaymentMethod("");
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-field">
//           <label>Description:</label>
//           <input
//             type="text"
//             required
//             className="input"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label>Amount:</label>
//           <input
//             type="number"
//             required
//             className="input"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label>Category:</label>
//           <select
//             required
//             className="input"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select a Category</option>
//             <option value="Food">Food</option>
//             <option value="Rent">Rent</option>
//             <option value="Salary">Salary</option>
//             <option value="Utilities">Utilities</option>
//             <option value="Entertainment">Entertainment</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div className="form-field">
//           <label>Payment Method:</label>
//           <select
//             required
//             className="input"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           >
//             <option value="">Select a Payment Method</option>
//             <option value="Credit Card">Credit Card</option>
//             <option value="Cash">Cash</option>
//             <option value="Bank Transfer">Bank Transfer</option>
//             <option value="UPI">UPI</option>
//           </select>
//         </div>
//         <button type="submit" className="button">
//           Add Expense
//         </button>
//         <button type="submit" className="del">
//           Subtract Expense
//         </button>
//       </form>
//     </div>
//   );
// };

import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const { addRecord } = useFinancialRecords();
  const { user } = useUser();

  // Function to handle adding an expense
  const handleAddExpense = (event) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description: description,
      amount: parseFloat(amount), // Positive amount for adding expense
      category: category,
      paymentMethod: paymentMethod,
    };

    addRecord(newRecord);
    resetForm();
  };

  // Function to handle subtracting an expense
  const handleSubtractExpense = (event) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description: description,
      amount: -Math.abs(parseFloat(amount)), // Negative amount for subtracting expense
      category: category,
      paymentMethod: paymentMethod,
    };

    addRecord(newRecord);
    resetForm();
  };

  // Reset form fields after submission
  const resetForm = () => {
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-field">
          <label>Description:</label>
          <input
            type="text"
            required
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Amount:</label>
          <input
            type="number"
            required
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Category:</label>
          <select
            required
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label>Payment Method:</label>
          <select
            required
            className="input"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <button type="submit" className="button" onClick={handleAddExpense}>
          Received
        </button>
        <button type="submit" className="del" onClick={handleSubtractExpense}>
          Spent
        </button>
      </form>
    </div>
  );
};
