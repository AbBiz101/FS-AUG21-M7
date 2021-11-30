import Song from './Song';
import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Spinner } from 'react-bootstrap';
import { likeSongs, getSingleAlbum } from '../action';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const mapStateToProps = (state) => ({
	album: state.singleAlbum.album,
	tracks: state.singleAlbum.tracks,
	likedElements: state.likedSong.elements,
	isLoading: state.singleAlbum.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
	fetchSongs: (id) => {
		dispatch(getSingleAlbum(id));
	},
	likeDislike: (track, action) => {
		dispatch(likeSongs(track, action));
	},
});

const Album = ({
	fetchSongs,
	likeDislike,
	likedElements,
	album,
	tracks,
	isLoading,
}) => {
	const params = useParams();
	const id = params.id;

	const [isLiked, setIsLiked] = useState(false);
	const isALikedSong = () => {
		if (likedElements.filter((i) => i.id === album.id).length < 1) {
			likeDislike(album, 'LIKE');
			setIsLiked(true);
		} else {
			likeDislike(album, 'DISLIKE');
			setIsLiked(false);
		}
	};

	useEffect(() => {
		fetchSongs(id);
		isALikedSong();
	}, [params.id]);

	return (
		<div className="col-12 col-md-9 offset-md-3 mainPage">
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
						{album.cover && (
							<div className="col-md-3 pt-5 text-center" id="img-container">
								<>
									<span
										onClick={() => isALikedSong(album)}
										className="card-title trackHover px-3"
										style={{
											hover: 'none',
											position: 'absolute',
											color: 'white',
										}}
									>
										{!isLiked ? (
											<AiFillHeart
												style={{
													height: ' 30px',
													width: '30px',
													color: 'white',
												}}
											/>
										) : (
											<AiOutlineHeart
												style={{
													height: ' 30px',
													width: '30px',
													color: 'white',
												}}
											/>
										)}
									</span>
									<img
										src={album.cover}
										className="card-img img-fluid"
										alt="Album"
									/>
								</>

								<div className="mt-4 text-center">
									<p className="album-title">{album.title}</p>
								</div>
								<div className="text-center">
									<p className="artist-name">
										{album.artist ? album.artist.name : ''}
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
									{tracks.map((song) => (
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
