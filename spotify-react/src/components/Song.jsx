import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => dispatch;

const Song = ({ track }) => (
	<div className="py-3 trackHover">
		<span className="card-title trackHover px-3" style={{ color: 'white' }}>
			{track.title}
		</span>
		<small className="duration" style={{ color: 'white' }}>
			{Math.floor(parseInt(track.duration) / 60)}:
			{parseInt(track.duration) % 60 < 10
				? '0' + (parseInt(track.duration) % 60)
				: parseInt(track.duration) % 60}
		</small>
		{AiFillHeart}
		{AiOutlineHeart}
	</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song);
