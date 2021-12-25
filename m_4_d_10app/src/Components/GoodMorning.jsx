import React from 'react';
import SingleCard from './SingleCard';
import BigCard from './BigCard';
export default class GoodMorning extends React.Component {
	state = {
		music: null,
	};

	fetchMusic = async () => {
		try {
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/deezer/album/75621062',
			);

			let data = await response.json();
			console.log(data);
			if (data.length) {
				this.setState({
					music: data,
				});
				console.log(this.state.music.artist);
				
			}
		} catch (error) {
			console.log(error);
		}
	};

	let;
	componentDidMount =  () => {
		this.fetchMusic()
	};

	render() {
		return (
			<div className="songs good-morning-section col-12 col-sm-8 col-md-9 col-lg-10 p-0 m-0">
				<div className="d-flex flex-wrap">
					<SingleCard />
					<SingleCard />
					<SingleCard />
					<SingleCard />
				</div>
				<div className="d-flex flex-wrap">
					<BigCard />
					<BigCard />
					<BigCard />
					<BigCard />
				</div>
			</div>
		);
	}
}
