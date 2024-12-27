import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = props => {
	const [isEditing, setEditing] = useState(false)
	const expenseSubmitHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.floor(Math.random() * 600) + 1,
		}
		props.onSavedExpense(expenseData)
		setEditing(false)
	}
	const editingHandler = () => {
		setEditing(true)
	}

	const EditingStopHandler = () => {
		setEditing(false)
	}
	return (
		<Card className='expense-container new-expense'>
			{!isEditing && (
				<div className='new-expense__actions btn-c'>
					<button type='button' onClick={editingHandler}>
						Add Expenses
					</button>
				</div>
			)}
			{isEditing && (
				<ExpenseForm
					onExpenseSubmit={expenseSubmitHandler}
					stopEditing={EditingStopHandler}
				/>
			)}
		</Card>
	)
}

export default NewExpense
