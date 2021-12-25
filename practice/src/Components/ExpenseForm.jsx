import { React, useState } from 'react';
export default function ExpenseForm(porps) {
	const [userInput, setUserInput] = useState({
		inputTitle: '',
		inputAmount: '',
		inputDate: '',
	});

	const titleChanger = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, inputTitle: event.target.value };
		});
	};
	const amountChanger = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, inputAmount: event.target.value };
		});
	};
	const dateChanger = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, inputDate: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: userInput.inputTitle,
			amount: userInput.inputAmount,
			date: new Date(userInput.inputDate),
		};
		porps.onSaveData(expenseData);
		setUserInput({
			inputTitle: '',
			inputAmount: '',
			inputDate: '',
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={userInput.inputTitle}
						onChange={titleChanger}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={userInput.inputAmount}
						onChange={amountChanger}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={userInput.inputDate}
						onChange={dateChanger}
						min="2020-01-01"
					/>
				</div>
			</div>
			<div className="new-expense__actions ">
				<button type="submit">Add Expense</button>
				<button onClick={porps.Click} type="button">
					Cancel
				</button>
			</div>
		</form>
	);
}
