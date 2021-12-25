import React from 'react';
import ChartBar from './ChartBar';
export default function Chart(props) {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMax = Math.max(...dataPointValues);
	return (
		<div className="chart">
			{props.dataPoints.map((datapoint) => (
				<ChartBar
					key={datapoint.label}
					maxVal={totalMax}
					label={datapoint.label}
					value={datapoint.value}
				/>
			))}
		</div>
	);
}
