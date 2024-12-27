import FilteredExpenses from './FIlteredExpenses'
import Card from '../UI/Card'
import './ExpenseItemsList.css'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
const ExpenseItemsList = props => {
	const [year, setYear] = useState('2020')

	const yearChangeHandler = yearData => {
		setYear(yearData)
	}

	const filteredArray = props.expenseList.filter(expense => {
		return expense.date.getFullYear().toString() === year
	})

	return (
		<Card className='expense-container'>
			<FilteredExpenses filter={year} onYearChange={yearChangeHandler} />
			<ExpensesChart expenses={filteredArray} />
			<ExpensesList items={filteredArray} />
		</Card>
	)
}

export default ExpenseItemsList
