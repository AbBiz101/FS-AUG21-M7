import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { connect } from 'react-redux';
import { likeSongs } from '../action/index';

const mapStateToProps = (state) => ({
	likedSongs: state.likedSong.songs,
});
const mapDispatchToProps = (dispatch) => ({
	likeDislike: (track, action) => {
		dispatch(likeSongs(track, action));
	},
});

const Song = ({ track, likedSongs, likeDislike }) => {
	const [isLiked, setIsLiked] = useState(false);

	//check if the music is in likedSongs or noteRole
	//if is return true
	//if not return false

	const isALikedSong = () => {
		//check if the music is in that array
		// track._id is inside of that array
		//is liked
		//setIsLiked(true)
		if (likedSongs.filter((i) => i.id === track.id).length < 1) {
			setIsLiked(true);
		} else {
			setIsLiked(false);
		}
	};

	useEffect(() => {
		isALikedSong();
	}, []);

	const likeToggle = (track) => {
		if (likedSongs.filter((i) => i.id === track.id).length < 1) {
			likeDislike(track, 'LIKE_SONGS');
		} else {
			likeDislike(track, 'DISLIKE_SONGS');
		}
	};

	/*
	first an array with liked songs
	Then for each song you need to check if they are in that array or not
	if they are show filled heart
	if not show empty heart then

	then
	empty heart on click push the song to the array
	filled heart on click remove the song from that array

	*/

	return (
		<div className="py-3 trackHover">
			<span
				onClick={() => likeToggle(track)}
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
