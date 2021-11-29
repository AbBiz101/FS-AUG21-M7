import React from 'react';
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
	const likeToggle = (track) => {
		if (likedSongs.filter((i) => i.id === track.id).length < 1) {
			likeDislike(track, 'LIKE_SONGS');
		} else {
			likeDislike(track, 'DISLIKE_SONGS');
		}
	};

	return (
		<div className="py-3 trackHover">
			<span className="card-title trackHover px-3" style={{ color: 'white' }}>
				{<AiFillHeart />}
				{<AiOutlineHeart />}
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
}
	

	


export default connect(mapStateToProps, mapDispatchToProps)(Song);
