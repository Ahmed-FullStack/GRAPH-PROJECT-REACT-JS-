import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'
const expense = props => {
	let title = props.title

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-description'>
				<h3 className='fz-2'>{title}</h3>
				<h3 className='fz-2'>${props.amount}</h3>
			</div>
		</Card>
	)
}

export default expense
