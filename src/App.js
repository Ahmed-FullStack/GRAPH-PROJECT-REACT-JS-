import React, { useState } from 'react'
import './App.css'
import ExpenseItemsList from './components/Expenses/ExpenseItemsList'
import NewExpense from './components/NewExpense/NewExpense'

const EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
]
const App = () => {
	const [expense, setExpenses] = useState(EXPENSES)

	const addExpenseHandler = savedExpenseData => {
		setExpenses(prevExpenses => [savedExpenseData, ...prevExpenses])
	}

	return (
		<div className='App'>
			<NewExpense onSavedExpense={addExpenseHandler} />
			<ExpenseItemsList expenseList={expense} />
		</div>
	)
}

export default App
