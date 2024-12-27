import ChartBar from './CharBar'
import './Chart.css'
const Card = props => {
	const dataPointsValues = props.dataPoints.map(point => point.value)
	const totalMaxValue = Math.max(...dataPointsValues)
	return (
		<div className='chart'>
			{props.dataPoints.map(dataPoint => (
				<ChartBar
					key={dataPoint.label}
					label={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaxValue}
				/>
			))}
		</div>
	)
}

export default Card
