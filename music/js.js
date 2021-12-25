// /** @format */

// let currentMusic = 0;
// const music = document.querySelector('#audio');
// const seekbar = document.querySelector('.seek-bar');
// const songname = document.querySelector('.Song-name');
// const artistname = document.querySelector('.artist-name');
// const disk = document.querySelector('.disk');
// const currenttime = document.querySelector('.current-time');
// const durationtime = document.querySelector('.duration-time');
// const backbtn = document.querySelector('.back-btn');
// const playbtn = document.querySelector('.play-btn');
// const nextbtn = document.querySelector('.next-btn');

// playbtn.addEventListener('click', () => {
// 	if (playbtn.className.includes('pause')) {
// 		music.play();
// 	} else {
// 		music.pause();
// 	}
// 	playbtn.classList.toggle('pause');
// 	disk.classList.toggle('play');
// });

// const setMusic = (i) => {
// 	seekbar.value = 0;
// 	let song = songs[i];
// 	currentMusic = i;
// 	music.src = song.path;
// 	songname.innerHTML = song.name;
// 	artistname.innerHTML = song.artist;
// 	currenttime.innerHTML = '00:00';
// 	disk.style.backgroundImage = `url('${song.cover}')`;
// 	setTimeout(() => {
// 		seekbar.max = music.duration;
// 		durationtime.innerHTML = formatTime(music.duration);
// 	}, 300);
// };
// setMusic(10);

const formatTime = (time) => {
	let min = Math.floor(time / 60);
	let sec = Math.floor(time % 60);
	if (min < 10) {
		min = `0${min}`;
	}
	if (sec < 10) {
		sec = `0${sec}`;
	}
	return `${min}:${sec}`;
};
console.log(formatTime(111)); 


// setInterval(() => {
// 	seekbar.value = music.currenttime;
// 	currenttime.innerHTML = formatTime(music.currenttime);
// 	if (Math.floor(music.currenttime) === Math.floor(seekbar.max)) {
// 		nextbtn.click();
// 	}
// }, 500);

// seekbar.addEventListener('change', () => {
// 	music.currenttime = seekbar.value;
// });

// backbtn.addEventListener('click', () => {
// 	if (currentMusic <= 0) {
// 		currentMusic = songs.length + 1;
// 	} else {
// 		currentMusic--;
// 	}
// 	setMusic(currentMusic);
// 	playMusic();
// });

// nextbtn.addEventListener('click', () => {
// 	if (currentMusic >= songs.length - 1) {
// 		currentMusic = 0;
// 	} else {
// 		currentMusic++;
// 	}
// 	setMusic(currentMusic);
// 	playMusic();
// });

// const playMusic = () => {
// 	music.play();
// 	playbtn.classList.remove('pause');
// 	disk.classList.add('play');
// };
