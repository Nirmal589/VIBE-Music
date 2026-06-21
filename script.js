console.log("Welcome to Hindi VIBE");

let songs = [
  { songName: "Agar Tum Saath Ho", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Baatein Ye Kabhi Na", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "Arjit Singh mashup non stop", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "DHUN", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Chal we tu Bandeya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "chhod diya wo rasta", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songName: "Humdard", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
  { songName: "Thodi Jagah", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songName: "Tujhe Rab Ne Banaya Kis Liye ", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  { songName: "Abhi Saans Lene Ki Fursat Nahin Hai", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];

let songIndex = 0;
let audioElement = new Audio(songs[0].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let currentSongItem = null;

document.title = songs[0].songName;

songItems.forEach((element, i) => {
  element.getElementsByClassName('songName')[0].innerText = `${i + 1}. ${songs[i].songName}`;
});

masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime <= 0){
    audioElement.play();
    masterPlay.classList.replace('fa-play-circle','fa-pause-circle');
    gif.style.opacity = 1;
    if(currentSongItem) currentSongItem.classList.replace('fa-play-circle','fa-pause-circle');
  } else {
    audioElement.pause();
    masterPlay.classList.replace('fa-pause-circle','fa-play-circle');
    gif.style.opacity = 0;
    if(currentSongItem) currentSongItem.classList.replace('fa-pause-circle','fa-play-circle');
  }
});

audioElement.addEventListener('timeupdate', ()=>{
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  if(!isNaN(progress)) myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => { 
  if(audioElement.duration) audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100; 
});

const makeAllPlays = ()=>{ 
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
    element.classList.replace('fa-pause-circle','fa-play-circle'); 
  }); 
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    currentSongItem = e.target;
    e.target.classList.replace('fa-play-circle','fa-pause-circle');
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    document.getElementById('coverImg').src = songs[songIndex].coverPath;
    document.title = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.replace('fa-play-circle','fa-pause-circle');
  });
});

const updateSong=()=>{  
  makeAllPlays();
  currentSongItem=document.getElementById(songIndex.toString());
  currentSongItem?.classList.replace('fa-play-circle','fa-pause-circle');
  audioElement.src=songs[songIndex].filePath;
  masterSongName.innerText=songs[songIndex].songName;
  document.getElementById('coverImg').src = songs[songIndex].coverPath;
  document.title=songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.replace('fa-play-circle','fa-pause-circle');
};

document.getElementById('next').addEventListener('click', ()=>{ songIndex=(songIndex+1)%songs.length; updateSong(); });
document.getElementById('previous').addEventListener('click', ()=>{ songIndex=(songIndex-1+songs.length)%songs.length; updateSong(); });
document.getElementById('shuffleBtn').addEventListener('click', ()=>{ songIndex=Math.floor(Math.random()*songs.length); updateSong(); });
