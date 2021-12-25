import { React, useState } from 'react';
import ExpenseForm from './ExpenseForm';
export default function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);

	const editingHandler = () => {
		setIsEditing(true);
	};

	const SaveDataHandler = (enterdExpenseData) => {
		const expenseData = { ...enterdExpenseData, id: Math.random().toString() };
		props.addExpense(expenseData);
	};

	const editing = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
			{isEditing && (
				<ExpenseForm Click={editing} onSaveData={SaveDataHandler} />
			)}
		</div>
	);
}
