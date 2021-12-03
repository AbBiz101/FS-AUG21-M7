import { useEffect } from 'react';
import { getWeather } from '../action/index';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Spinner } from 'react-bootstrap';
import { BsWind } from 'react-icons/bs';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';
import { AiFillCloud } from 'react-icons/ai';

export default function Home() {
	const { current } = useSelector((state) => state);
	const loading = useSelector((state) => state.current.isLoading);
	const cityName = useSelector((state) => state.current.cityName);

	const [data] = current.data;
	let y = data.sys.sunset;

	const postTimer = (y) => {
		const minutes = parseInt(y / 1000 / 60);
		const hours = parseInt(minutes / 60);
		return hours;
	};
	const dispatch = useDispatch();
	console.log(data);
	useEffect(() => {
		dispatch(getWeather(cityName));
	}, [cityName]);

	return (
		<>
			{loading ? (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			) : (
				<Card style={{}}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<h2 style={{ color: 'black' }}></h2>

					<Card.Body>
						<Card.Title>{data.name}</Card.Title>
						<Card.Text>{data.weather[0].description}</Card.Text>
						<Card.Text>
							<BsFillSunriseFill /> Sunrise {data.sys.sunrise}:00
						</Card.Text>
						<Card.Text>
							<BsFillSunsetFill /> Sunset {data.clouds.all}
						</Card.Text>

						<Card.Text>Temperature {data.main.temp - 274.5}°C</Card.Text>
						<Card.Text>
							<FaTemperatureLow />
							Minimum {data.main.temp_min}°C
						</Card.Text>
						<Card.Text>
							<FaTemperatureHigh />
							Maximum {data.main.temp_max}°C
						</Card.Text>
						<Card.Text>Humidity {data.main.humidity}M/s</Card.Text>
						<Card.Text>Wind Speed- {data.wind.speed}</Card.Text>
					</Card.Body>

					<div className="main container">
						<div className="row">
							<div className="col-xs-12">
								<div className="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
									<div className="col-xs-6">
										<h2>
											{data.name}
											<br />
											<small></small>
										</h2>
										<p className="h3">
											<i className="mi mi-fw mi-lg mi-rain-heavy" />
											{data.weather[0].description}
										</p>
									</div>
									<div className="col-xs-6 text-center">
										<div className="h1 temperature">
											<span>{Math.floor(data.main.temp - 274.5)}°C</span>
											<br />
											<small>
												{Math.floor(data.main.temp_min - 273.15)}°C /
												{Math.floor(data.main.temp_max - 273.15)}°C
											</small>
										</div>
									</div>
									<div className="col-xs-12">
										<ul className="list-inline row forecast">
											<li className="col-xs-4 col-sm-2 text-center">
												<h3 className="h5">
													<BsFillSunriseFill />
												</h3>
												<p>
													<i className="mi mi-fw mi-2x mi-cloud-sun" />
													<br />
													{data.sys.sunrise}:00
												</p>
											</li>
											<li className="col-xs-4 col-sm-2 text-center">
												<h3 className="h5">
													<BsFillSunsetFill />
												</h3>
												<p>
													<i className="mi mi-fw mi-2x mi-sun" />
													<br />
													{data.sys.sunset}:00
												</p>
											</li>
											<li className="col-xs-4 col-sm-2 text-center">
												<h3 className="h5">
													<AiFillCloud />
												</h3>
												<p>
													<i className="mi mi-fw mi-2x mi-cloud-sun" />
													<br />
													{data.clouds.all}
												</p>
											</li>
											<li className="col-xs-4 col-sm-2 text-center">
												<h3 className="h5">
													<BsWind />
												</h3>
												<p>
													<i className="mi mi-fw mi-2x mi-rain" />
													<br />
													{data.wind.speed}
												</p>
											</li>
											<li className="col-xs-4 col-sm-2 text-center">
												<h3 className="h5">Sun</h3>
												<p>
													<i className="mi mi-fw mi-2x mi-rain-heavy" />
													<br />
													15°/22°
												</p>
											</li>
											<li className="col-xs-4 col-sm-2 text-center">
												<h3 className="h5">Mon</h3>
												<p>
													<i className="mi mi-fw mi-2x mi-clouds" />
													<br />
													12°/17°
												</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Card>
			)}
		</>
	);
}
