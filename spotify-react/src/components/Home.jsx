import { useEffect } from 'react';
import AlbumCard from './AlbumCard';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'react-bootstrap';
import { getAllSongs } from '../action/index';

const mapStateToProps = (state) => ({
	hipHopSongs: state.allAlbums.Category.hipHopSongs,
	isLoading: state.allAlbums.Category.isLoading,
	rockSongs: state.allAlbums.Category.rockSongs,
	popSongs: state.allAlbums.Category.popSongs,
	searchSong: state.search.searchSong,
});

const mapDispatchToProps = (dispatch) => ({
	fetchSong: (artistName, category) => {
		dispatch(getAllSongs(artistName, category));
	},
});

const Home = ({
	isLoading,
	hipHopSongs,
	rockSongs,
	fetchSong,
	popSongs,
	searchSong,
}) => {
	const rockArtists = [
		'queen',
		'u2',
		'thepolice',
		'eagles',
		'thedoors',
		'oasis',
		'thewho',
		'bonjovi',
	];

	const popArtists = [
		'arianagrande',
		'maroon5',
		'onerepublic',
		'coldplay',
		'katyperry',
	];

	const hipHopArtists = [
		'eminem',
		'snoopdogg',
		'lilwayne',
		'drake',
		'kanyewest',
	];

	const populateHome = async () => {
		if (rockSongs.length < 4 && popSongs.length < 4 && hipHopSongs.length < 4) {
			let rockRandomArtists = [];
			let popRandomArtists = [];
			let hipHopRandomArtists = [];

			while (rockRandomArtists.length < 4) {
				let artist =
					rockArtists[Math.floor(Math.random() * rockArtists.length)];
				if (!rockRandomArtists.includes(artist)) {
					rockRandomArtists.push(artist);
				}
			}

			while (popRandomArtists.length < 4) {
				let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
				if (!popRandomArtists.includes(artist)) {
					popRandomArtists.push(artist);
				}
			}

			while (hipHopRandomArtists.length < 4) {
				let artist =
					hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
				if (!hipHopRandomArtists.includes(artist)) {
					hipHopRandomArtists.push(artist);
				}
			}

			for (let j = 0; j < rockRandomArtists.length; j++)
				await fetchSong(rockRandomArtists[j], 'LOAD_ROCK_SONG');

			for (let k = 0; k < popRandomArtists.length; k++)
				await fetchSong(popRandomArtists[k], 'LOAD_POP_SONG');

			for (let l = 0; l < hipHopRandomArtists.length; l++)
				await fetchSong(hipHopRandomArtists[l], 'LOAD_HIP_HOP_SONG');
		}
	};

	useEffect(() => {
    populateHome();
    console.log(isLoading);
	}, []);

	return (
		<Col className="col-12 col-md-9 offset-md-3 mainPage">
			{isLoading ? (
				<Spinner
					animation="border"
					role="status"
					style={{
						height: '100px',
						width: '100px',
						position: 'absolute',
						top: '50%',
						left: '50%',
					}}
				>
					<span className="sr-only">Loading...</span>
				</Spinner>
			) : (
				<>
					<Row>
						<div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
							<div>TRENDING</div>
							<div>PODCAST</div>
							<div>MOODS AND GENRES</div>
							<div>NEW RELEASES</div>
							<div>DISCOVER</div>
						</div>
					</Row>
					{searchSong.length > 0 && (
						<Row>
							<Col xs={10}>
								<div id="searchResults">
									<h2>Search Results</h2>
									<Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
										{searchSong.map((song) => (
											<AlbumCard song={song} key={song.id} />
										))}
									</Row>
								</div>
							</Col>
						</Row>
					)}
					{searchSong.length === 0 && (
						<>
							<Row>
								<Col xs={10}>
									<div id="rock">
										<h2>Rock Classics</h2>
										<Row
											className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
											id="rockSection"
										>
											{rockSongs.map((song) => (
												<AlbumCard song={song} key={song.id} />
											))}
										</Row>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs={10}>
									<div id="pop">
										<h2>Pop Culture</h2>
										<Row
											className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
											id="popSection"
										>
											{popSongs.map((song) => (
												<AlbumCard song={song} key={song.id} />
											))}
										</Row>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs={10}>
									<div id="hiphop">
										<h2>#HipHop</h2>
										<Row
											className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
											id="hipHopSection"
										>
											{hipHopSongs.map((song) => (
												<AlbumCard song={song} key={song.id} />
											))}
										</Row>
									</div>
								</Col>
							</Row>
						</>
					)}
				</>
			)}
		</Col>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
