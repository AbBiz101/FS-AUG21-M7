import React from 'react';
import Likedicon from '../images/icons8-enlarge-50.png';

export default class Footer extends React.Component {
	render() {
		return (
			<div className="container-fluid m-0 main-body">
				<div className="  row footer">
					<nav className="col-12 navbar fixed-bottom now-playing">
						<div id="song-nav" className="col-12 col-xl-4 title-img">
							<div className="cover-logo">
								<div className="disk" />
								<div>
									<a className="Song-name" id="a1" href>
										Blessed (feat. Damian Marley)
									</a>
									<br />
									<a className="artist-name" id="a2" href>
										WizKid, Damian Markey
									</a>
								</div>
								<div className="bi-bi-heart">
									<i className="bi bi-heart" />
								</div>
								<div className="bi-bi-aspect">
									<i className="bi bi-aspect-ratio" />
								</div>
							</div>
						</div>
						<div id="play-controls" className="col-12 col-xl-4 play-btn">
							<svg
								id="shuffle"
								className="mr-2"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width={20}
								height={17}
								viewBox="0 0 172 172"
								style={{ fill: '#aa0909' }}
							>
								<g
									fill="none"
									fillRule="nonzero"
									stroke="none"
									strokeWidth={1}
									strokeLinecap="butt"
									strokeLinejoin="miter"
									strokeMiterlimit={10}
									strokeDasharray
									strokeDashoffset={0}
									fontFamily="none"
									fontWeight="none"
									fontSize="none"
									textAnchor="none"
									style={{ mixBlendMode: 'normal' }}
								>
									<path d="M0,172v-172h172v172z" fill="none" />
									<g fill="#ffffff">
										<path d="M1.34375,52.40625c0,2.28438 1.74687,4.03125 4.03125,4.03125h34.13125c6.9875,0 13.4375,3.09062 17.87188,8.6c0.80625,0.94063 2.01563,1.47813 3.09062,1.47813c0.94063,0 1.74687,-0.26875 2.55313,-0.94062c1.74687,-1.34375 2.01562,-3.89688 0.67188,-5.64375c-5.9125,-7.39062 -14.78125,-11.55625 -24.1875,-11.55625h-34.13125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125zM147.94688,95.27188c-1.6125,-1.6125 -4.16563,-1.6125 -5.64375,0c-1.6125,1.6125 -1.6125,4.16562 0,5.64375l14.64687,14.64687h-37.89375c-6.9875,0 -13.4375,-3.09063 -17.87187,-8.6c-1.34375,-1.74687 -3.89688,-2.01562 -5.64375,-0.67187c-1.74687,1.34375 -2.01562,3.89688 -0.67187,5.64375c5.9125,7.39063 14.64688,11.55625 24.1875,11.55625h37.75937l-14.64687,14.64687c-1.6125,1.6125 -1.6125,4.16563 0,5.64375c0.80625,0.80625 1.88125,1.20937 2.82187,1.20937c0.94062,0 2.01563,-0.40312 2.82188,-1.20937l21.5,-21.5c1.6125,-1.6125 1.6125,-4.16562 0,-5.64375zM147.94688,28.08438c-1.6125,-1.6125 -4.16563,-1.6125 -5.64375,0c-1.6125,1.6125 -1.6125,4.16563 0,5.64375l14.64687,14.64688h-37.89375c-9.40625,0 -18.275,4.16562 -24.1875,11.55625l-37.625,47.03125c-4.3,5.50937 -10.88437,8.6 -17.87188,8.6h-33.99687c-2.28438,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74687,4.03125 4.03125,4.03125h34.53437h0.13438c9.27188,-0.13437 17.87187,-4.3 23.65,-11.55625l37.625,-47.03125c4.3,-5.50938 10.88437,-8.6 17.87187,-8.6h37.75938l-14.64688,14.64688c-1.6125,1.6125 -1.6125,4.16563 0,5.64375c0.80625,0.80625 1.88125,1.20938 2.82188,1.20938c0.94062,0 2.01563,-0.40313 2.82188,-1.20938l21.5,-21.5c1.6125,-1.6125 1.6125,-4.16563 0,-5.64375z" />
									</g>
								</g>
							</svg>
							<svg
								id="prev-button"
								className="mr-2"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width={17}
								height={17}
								viewBox="0 0 172 172"
								style={{ fill: '#000000' }}
							>
								<g
									fill="none"
									fillRule="nonzero"
									stroke="none"
									strokeWidth={1}
									strokeLinecap="butt"
									strokeLinejoin="miter"
									strokeMiterlimit={10}
									strokeDasharray
									strokeDashoffset={0}
									fontFamily="none"
									fontWeight="none"
									fontSize="none"
									textAnchor="none"
									style={{ mixBlendMode: 'normal' }}
								>
									<path d="M0,172v-172h172v172z" fill="none" />
									<g fill="#cccccc">
										<path d="M61.92,75.16938v-44.20938h-27.52v110.08h27.52v-44.20937l72.24,47.11187v-115.89844z" />
									</g>
								</g>
							</svg>
							<svg
								id="play-button"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width={35}
								height={35}
								viewBox="0 0 172 172"
								style={{ fill: '#000000' }}
							>
								<g
									fill="none"
									fillRule="nonzero"
									stroke="none"
									strokeWidth={1}
									strokeLinecap="butt"
									strokeLinejoin="miter"
									strokeMiterlimit={10}
									strokeDasharray
									strokeDashoffset={0}
									fontFamily="none"
									fontWeight="none"
									fontSize="none"
									textAnchor="none"
									style={{ mixBlendMode: 'normal' }}
								>
									<path d="M0,172v-172h172v172z" fill="none" />
									<g fill="#ffffff">
										<path d="M86,6.88c-43.62608,0 -79.12,35.49048 -79.12,79.12c0,43.62952 35.49392,79.12 79.12,79.12c43.62608,0 79.12,-35.49048 79.12,-79.12c0,-43.62952 -35.49392,-79.12 -79.12,-79.12zM62.06448,123.95696l-0.28552,-75.66624l65.50104,37.58544z" />
									</g>
								</g>
							</svg>
							<svg
								id="next-button"
								className="ml-2"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width={20}
								height={17}
								viewBox="0 0 172 172"
								style={{ fill: '#000000' }}
							>
								<g
									fill="none"
									fillRule="nonzero"
									stroke="none"
									strokeWidth={1}
									strokeLinecap="butt"
									strokeLinejoin="miter"
									strokeMiterlimit={10}
									strokeDasharray
									strokeDashoffset={0}
									fontFamily="none"
									fontWeight="none"
									fontSize="none"
									textAnchor="none"
									style={{ mixBlendMode: 'normal' }}
								>
									<path d="M0,172v-172h172v172z" fill="none" />
									<g fill="#cccccc">
										<path d="M110.08,30.96v44.20938l-72.24,-47.12531v115.91187l72.24,-47.12531v44.20937h27.52v-110.08z" />
									</g>
								</g>
							</svg>
							<img
								id="repeat-button"
								src="./images/icons8-repeat-30 (1).png"
								width={17}
								height={17}
								alt
							/>
							<div className="position-relative">
								<span className="span-1">02:20</span>
								<hr className="duration-hr" />
								<span className="span-2">03:25</span>
							</div>
						</div>

						<div className="col-12 col-xl-4 volume-controls">
							<div className="vol-btn">
								<svg
									id="vol-btn-1"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width={15}
									height={15}
									viewBox="0 0 172 172"
									style={{ fill: '#000000' }}
								>
									<g
										fill="none"
										fillRule="nonzero"
										stroke="none"
										strokeWidth={1}
										strokeLinecap="butt"
										strokeLinejoin="miter"
										strokeMiterlimit={10}
										strokeDasharray
										strokeDashoffset={0}
										fontFamily="none"
										fontWeight="none"
										fontSize="none"
										textAnchor="none"
										style={{ mixBlendMode: 'normal' }}
									>
										<path d="M0,172v-172h172v172z" fill="none" />
										<g fill="#cccccc">
											<path d="M28.66667,21.5c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v78.83333c0,7.91917 6.41417,14.33333 14.33333,14.33333h50.16667v-14.33333h-43v-78.83333h121.83333c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM107.5,50.16667c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v71.66667c0,7.91917 6.41417,14.33333 14.33333,14.33333h35.83333c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-71.66667c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM107.5,64.5h35.83333v71.66667h-35.83333z"></path>
										</g>
									</g>
								</svg>
								<svg
									id="vol-btn-2"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width={15}
									height={15}
									viewBox="0 0 172 172"
									style={{ fill: '#000000' }}
								>
									<g
										fill="none"
										fillRule="nonzero"
										stroke="none"
										strokeWidth={1}
										strokeLinecap="butt"
										strokeLinejoin="miter"
										strokeMiterlimit={10}
										strokeDasharray
										strokeDashoffset={0}
										fontFamily="none"
										fontWeight="none"
										fontSize="none"
										textAnchor="none"
										style={{ mixBlendMode: 'normal' }}
									>
										<path d="M0,172v-172h172v172z" fill="none" />
										<g fill="#cccccc">
											<path d="M6.88,10.32v13.76h158.24v-13.76zM6.88,44.72v13.76h99.76v-13.76zM126.9575,48.16c-0.33594,0.02688 -0.645,0.08063 -0.9675,0.215c-1.29,0.5375 -2.15,1.84094 -2.15,3.225v68.8c0,1.38406 0.86,2.70094 2.15,3.225c0.43,0.17469 0.84656,0.215 1.29,0.215c0.90031,0 1.81406,-0.30906 2.4725,-0.9675l34.4,-34.4c1.34375,-1.34375 1.34375,-3.60125 0,-4.945l-34.4,-34.4c-0.73906,-0.73906 -1.78719,-1.06156 -2.795,-0.9675zM6.88,79.12v13.76h99.76v-13.76zM6.88,113.52v13.76h99.76v-13.76zM6.88,147.92v13.76h158.24v-13.76z"></path>
										</g>
									</g>
								</svg>
								<svg
									id="vol-btn-3"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width={15}
									height={15}
									viewBox="0 0 172 172"
									style={{ fill: '#000000' }}
								>
									<g
										fill="none"
										fillRule="nonzero"
										stroke="none"
										strokeWidth={1}
										strokeLinecap="butt"
										strokeLinejoin="miter"
										strokeMiterlimit={10}
										strokeDasharray
										strokeDashoffset={0}
										fontFamily="none"
										fontWeight="none"
										fontSize="none"
										textAnchor="none"
										style={{ mixBlendMode: 'normal' }}
									>
										<path d="M0,172v-172h172v172z" fill="none" />
										<g fill="#cccccc">
											<path d="M91.53625,6.88c-2.29781,0 -4.48812,0.95406 -6.03344,2.63375l-42.28781,45.52625h-26.015c-5.65719,0 -10.32,4.66281 -10.32,10.32v41.28c0,5.65719 4.66281,10.32 10.32,10.32h26.015l42.28781,45.52625c1.54531,1.67969 3.73562,2.63375 6.03344,2.63375c4.50156,0 8.22375,-3.72219 8.22375,-8.22375v-141.7925c0,-4.50156 -3.72219,-8.22375 -8.22375,-8.22375zM91.53625,13.76c0.77938,0 1.34375,0.56438 1.34375,1.34375v141.7925c0,0.77938 -0.56437,1.34375 -1.34375,1.34375c-0.38969,0 -0.73906,-0.16125 -0.99437,-0.43l-42.38188,-45.63375v-52.3525l42.36844,-45.63375c0.26875,-0.28219 0.61813,-0.43 1.00781,-0.43zM136.55188,35.85125l-3.85656,5.68406c15.25156,8.96281 25.54469,25.51781 25.54469,44.46469c0,18.94688 -10.29312,35.50188 -25.54469,44.46469l3.85656,5.68406c17.07906,-10.2125 28.56812,-28.83687 28.56812,-50.14875c0,-21.31187 -11.48906,-39.93625 -28.56812,-50.14875zM124.95531,52.90344l-3.89688,5.72438c9.82281,5.20031 16.54156,15.50687 16.54156,27.37219c0,11.86531 -6.71875,22.17188 -16.54156,27.37219l3.89688,5.72438c11.63687,-6.47688 19.52469,-18.86625 19.52469,-33.09656c0,-14.23031 -7.88781,-26.61969 -19.52469,-33.09656zM17.2,61.92h24.08v48.16h-24.08c-1.92156,0 -3.44,-1.51844 -3.44,-3.44v-41.28c0,-1.92156 1.51844,-3.44 3.44,-3.44zM113.25125,70.13031l-4.01781,5.92594c4.43438,1.15563 7.72656,5.14656 7.72656,9.94375c0,4.79719 -3.29219,8.78813 -7.72656,9.94375l4.01781,5.92594c6.20813,-2.60687 10.58875,-8.73437 10.58875,-15.86969c0,-7.13531 -4.38062,-13.27625 -10.58875,-15.86969z"></path>
										</g>
									</g>
								</svg>
							</div>
							<div className="expand">
								<hr className="volume-hr" />
								<img id="expand" src={Likedicon} width={18} alt />
							</div>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
