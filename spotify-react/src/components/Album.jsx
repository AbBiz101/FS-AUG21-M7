import Song from './Song';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Spinner } from 'react-bootstrap';
import { getSingleAlbum } from '../action';

const mapStateToProps = (state) => ({
	album: state.singleAlbum.album,
	tracks: state.singleAlbum.tracks,
	likedSong: state.likedSong.songs,
	isLoading: state.singleAlbum.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
	fetchSongs: (id) => {
		dispatch(getSingleAlbum(id));
	},
});

class Album extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.fetchSongs(id);
	}

	render() {
		return (
			<div className="col-12 col-md-9 offset-md-3 mainPage">
				{console.log(this.props.isLoading, this.props.tracks, this.props.album)}
				{this.props.isLoading ? (
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
							{this.props.album.cover && (
								<div className="col-md-3 pt-5 text-center" id="img-container">
									<img
										src={this.props.album.cover}
										className="card-img img-fluid"
										alt="Album"
									/>
									<div className="mt-4 text-center">
										<p className="album-title">{this.props.album.title}</p>
									</div>
									<div className="text-center">
										<p className="artist-name">
											{this.props.album.artist
												? this.props.album.artist.name
												: ''}
										</p>
									</div>
									<div className="mt-4 text-center">
										<button
											id="btnPlay"
											className="btn btn-success"
											type="button"
										>
											Play
										</button>
									</div>
								</div>
							)}
							<div className="col-md-8 p-5">
								<Row>
									<div className="col-md-10 mb-5" id="trackList">
										{this.props.tracks.map((song) => (
											<Song track={song} key={song.id} />
										))}
									</div>
								</Row>
							</div>
						</Row>
					</>
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
