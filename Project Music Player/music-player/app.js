const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song Titles
const song = ['hey', 'summer', 'ukulele'];


// Keep track of song
let songIndex = 2;


// Load Song Details into DOM
loadSong(song[songIndex]);

// Update song Details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}


// Play Song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classlist.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}



// Pause Song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classlist.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}


// Event Listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classlist.contains('play');

  if (isPlaying) {
    pauseSong();

  } else {
    playSong();
  }
});