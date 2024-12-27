import Card from '../UI/Card'
import './ExpenseDate.css'
const ExpenseDate = props => {
	const month = props.date.toLocaleString('en-US', { month: 'long' })
	const fullYear = props.date.getFullYear()
	const day = props.date.toLocaleString('en-US', { day: 'numeric' })
	return (
		<Card className='expense-date'>
			<h3 className='mb0 fz-_5'>{month}</h3>
			<h4 className='mb0 fz-_2'>{fullYear}</h4>
			<h3 className='mb0 expense-day'>{day}</h3>
		</Card>
	)
}

export default ExpenseDate
