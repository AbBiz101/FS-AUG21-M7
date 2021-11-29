import { useEffect, useState } from 'react';
import Song from './Song';
import { Row } from 'react-bootstrap';
import { getAllSongs } from '../action';

const mapStateToProps = (state) => ({
	userName: state.user.name,
});
const mapDispatchToProps = (dispatch) => ({
	fetchSongs: () => {
		dispatch(getAllSongs());
	},
});

const Album = () => {
	useEffect(() => {
		this.props.fetchSongs();
	}, []);

	return (
		<div className="col-12 col-md-9 offset-md-3 mainPage">
			<Row className="mb-3">
				<div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
					<div>TRENDING</div>
					<div>PODCAST</div>
					<div>MOODS AND GENRES</div>
					<div>NEW RELEASES</div>
					<div>DISCOVER</div>
				</div>
			</Row>
			<Row>
				{this.state.album.cover && (
					<div className="col-md-3 pt-5 text-center" id="img-container">
						<img
							src={this.state.album.cover}
							className="card-img img-fluid"
							alt="Album"
						/>
						<div className="mt-4 text-center">
							<p className="album-title">{this.state.album.title}</p>
						</div>
						<div className="text-center">
							<p className="artist-name">
								{this.state.album.artist ? this.state.album.artist.name : ''}
							</p>
						</div>
						<div className="mt-4 text-center">
							<button id="btnPlay" className="btn btn-success" type="button">
								Play
							</button>
						</div>
					</div>
				)}
				<div className="col-md-8 p-5">
					<Row>
						<div className="col-md-10 mb-5" id="trackList">
							{this.state.songs.map((song) => (
								<Song track={song} key={song.id} />
							))}
						</div>
					</Row>
				</div>
			</Row>
		</div>
	);
};

export default Album;
