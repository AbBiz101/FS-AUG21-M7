import React from 'react';

export default function ChartBar(props) {
	const barHeight = '0%';
	if (props.maxVal > 0) {
		barHeight = Math.round((props.value / props.maxVal) * 100);
	}
	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div style={{ height: barHeight }} className="chart-bar__fill"></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
}
