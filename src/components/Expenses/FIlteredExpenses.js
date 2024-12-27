import React from 'react'

import './ExpensesFilter.css'

const FilteredExpenses = props => {
	const yearHandler = e => {
		props.onYearChange(e.target.value)
	}

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.filter} onChange={yearHandler}>
					<option value='2022' onClick={yearHandler}>
						2022
					</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	)
}

export default FilteredExpenses
