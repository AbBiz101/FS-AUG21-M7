import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { connect } from 'react-redux';
import { likeSongs } from '../action/index';

const mapStateToProps = (state) => ({
	likedElements: state.likedSong.elements,
});
const mapDispatchToProps = (dispatch) => ({
	likeDislike: (track, action) => {
		dispatch(likeSongs(track, action));
	},
});

const Song = ({ track, likedElements, likeDislike }) => {
	const [isLiked, setIsLiked] = useState(false);

	const isALikedSong = () => {
		if (likedElements.filter((i) => i.id === track.id).length < 1) {
			likeDislike(track, 'LIKE');
			setIsLiked(true);
		} else {
			likeDislike(track, 'DISLIKE');
			setIsLiked(false);
		}
	};

	useEffect(() => {
		isALikedSong();
	}, []);

	return (
		<div className="py-3 trackHover">
			<span
				onClick={() => isALikedSong(track)}
				className="card-title trackHover px-3"
				style={{ color: 'white' }}
			>
				{!isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
			</span>
			<span className="card-title trackHover px-3" style={{ color: 'white' }}>
				{track.title}
			</span>
			<small className="duration" style={{ color: 'white' }}>
				{Math.floor(parseInt(track.duration) / 60)}:
				{parseInt(track.duration) % 60 < 10
					? '0' + (parseInt(track.duration) % 60)
					: parseInt(track.duration) % 60}
			</small>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
