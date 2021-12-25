import React from 'react';
export default function BigCard(porps) {
	return (
		<div className="Recently-card col-2 ml-3 p-2 ">
			<img
				src={porps.img}
				className="card-img-top"
			/>
			<div className="card-body mt-2">
				<h6 className="card-title text-white">Card title</h6>
				<h5 className="card-text">Some quick example text</h5>
				<button id="btn-with-style1" type="button" className="btn btn-dark">
					▶
				</button>
			</div>
		</div>
	);
}
