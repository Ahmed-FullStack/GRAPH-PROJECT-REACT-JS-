import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = props => {
	const [expenseData, setExpenseData] = useState({
		title: '',
		amount: '',
		date: '',
	})

	const expenseDataHandler = e => {
		const { name, value } = e.target

		console.log(e)

		setExpenseData(prevsData => ({
			...prevsData,
			[name]: value,
		}))
	}

	const submitHandler = e => {
		e.preventDefault()
		const newExpense = {
			title: expenseData.title,
			amount: +expenseData.amount,
			date: new Date(expenseData.date),
		}
		const newAnotherExpense = {
			title: expenseData.title,
			amount: expenseData.amount,
			date: new Date(expenseData.date),
		}
		props.onExpenseSubmit(newExpense)
		console.log(typeof newExpense.amount)
		console.log(typeof newAnotherExpense.amount)
		setExpenseData({ title: '', amount: '', date: '' })

		console.log(newExpense)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						className='new-expense__input'
						type='text'
						name='title'
						value={expenseData.title}
						onChange={expenseDataHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						className='new-expense__input'
						type='number'
						name='amount'
						value={expenseData.amount}
						onChange={expenseDataHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						className='new-expense__input cursor'
						type='date'
						name='date'
						min='2019'
						max='2020'
						value={expenseData.date}
						onChange={expenseDataHandler}
					/>
				</div>
			</div>
			<div className='flex'>
				<div className='new-expense__actions'>
					<button type='button' onClick={props.stopEditing}>
						Cancel
					</button>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	)
}

export default ExpenseForm
