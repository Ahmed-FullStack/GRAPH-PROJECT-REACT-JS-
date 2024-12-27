import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
const ExpensesList = props => {
	if (props.items.length === 0) {
		return (
			<div className='expense-list'>
				<p className='white center'>No Expenses Found</p>
			</div>
		)
	}

	return (
		<div className='expense-list'>
			{props.items.map(expense => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</div>
	)
}

export default ExpensesList
