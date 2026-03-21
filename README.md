# VIBE-Music
This is my first repository
<br>
Author-Nirmal singh
language used .. (HTML,CSS,JAVA Script)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hindi Vibe - Best Hindi Songs</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav>
    <ul>
      <li class="brand"><img src="logo.png" alt="VIBE-music" class="logo"> VIBE-music</li>
      <li>Home</li>
      <li>Popular</li>
      <li>Latest</li>
      <li><h1>NIRMAL SINGH</h1></li>
    </ul>
  </nav>
    <div class="container">
    <div class="songList">
      <div class="topBanner">
        <div>
          <h1>Hindi Songs Collection</h1>
          <p>Fast beats, soulful voice, and emotional Hindi songs.</p>
        </div>
        <button id="shuffleBtn"><i class="fa-solid fa-shuffle"></i> Shuffle</button>
      </div>

      <div class="songItemContainer">
        <div class="songItem"><div><span class="songName">1. Tera Ban Jaun</span><br/><small>Aalam Latif</small></div><span class="songlistplay"><i id="0" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">2. Dil Nache</span><br/><small>Aditya Raj</small></div><span class="songlistplay"><i id="1" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">3. Chand Taron Mein</span><br/><small>Sneha Singh</small></div><span class="songlistplay"><i id="2" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">4. Phir Bhi Tum</span><br/><small>Ankit Ranjan</small></div><span class="songlistplay"><i id="3" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">5. Yaadein Purani</span><br/><small>Shruti Verma</small></div><span class="songlistplay"><i id="4" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">6. Tere Bina</span><br/><small>Rahul Kumar</small></div><span class="songlistplay"><i id="5" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">7. Suno Aawaz</span><br/><small>Sia</small></div><span class="songlistplay"><i id="6" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">8. Raat Ki Sair</span><br/><small>Aakash Sharma</small></div><span class="songlistplay"><i id="7" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">9. Dil Ki Dastaan</span><br/><small>Neelam</small></div><span class="songlistplay"><i id="8" class="far songItemPlay fa-play-circle"></i></span></div>
        <div class="songItem"><div><span class="songName">10. Mit Jaate Hain Faasle</span><br/><small>Vivek</small></div><span class="songlistplay"><i id="9" class="far songItemPlay fa-play-circle"></i></span></div>
      </div>
    </div>
    <div class="songBanner">
      <div class="coverBlock">
        <h2>Now Playing</h2>
        <p id="masterSongName">Tera Ban Jaun</p>
        <img id="coverImg" src="covers/1.jpg" alt="cover" class="coverImg" />
        <img id="gif" src="playing.gif" alt="playing" class="playingGif" />
      </div>
    </div>
  </div>

  <div class="bottom">
    <input type="range" id="myProgressBar" min="0" max="100" value="0" />
    <div class="icons">
      <i class="fas fa-2x fa-step-backward" id="previous"></i>
      <i class="far fa-2x fa-play-circle" id="masterPlay"></i>
      <i class="fas fa-2x fa-step-forward" id="next"></i>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap");
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Ubuntu',sans-serif;background: radial-gradient(circle at top right, #111827 0%, #0b1220 45%, #04050a 100%);color:#f8fafc;}
nav ul{display:flex;align-items:center;list-style:none;background:rgba(5, 129, 231, 0.967);padding:10px 16px;gap:12px;}
nav ul li{color:#000f03;font-size:.95rem;letter-spacing:.2px;}
.brand{font-weight:800;font-size:1.2rem;display:flex;align-items:center;gap:8px;}
.logo{width:38px;height:38px;object-fit:contain;filter: brightness(1.4); border: 2px solid #f9fafb; border-radius: 8px; padding:2px;}
.container{width:min(96%,980px);margin:18px auto;background:rgba(3, 240, 236, 0.94);border-radius:16px;border:1px solid #334155;display:flex;flex-wrap:wrap;gap:16px;padding:16px;}
.songList{flex:2;}
.topBanner{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px;}
.topBanner h1{font-size:1.8rem;margin-bottom:4px;}
.topBanner p{color:#f9fafaec;}
#shuffleBtn{border:none;background:linear-gradient(120deg,#4e46e52c,#021093);color:#fefffefb;padding:.55rem 1rem;border-radius:10px;font-weight:700;cursor:pointer;}
.song .container{background:rgba(251, 252, 252, 0.94);border-radius:16px;border:1px solid #0679f4;display:flex;flex-wrap:wrap;gap:16px;padding:16px;}
.songItemContainer{display:flex;flex-direction:column;gap:30px;max-height:490px;overflow-y:auto;border:1px solid #0c0c0c66;border-radius:12px;background-image: url("bg.jpg"); background-size: cover;}
.songItem{background:#f8fbf905;border:1px solid #f7f9fa2c;border-radius:1px;color:#f7f5f5fe;padding:.6rem 1rem;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:.15s;}
.songItem:hover{transform:translateY(-2px);background:#dcdde04b;}
.songName{font-weight:700;font-size:1rem;}
.songItem small{color:#090909;font-size:.75rem;}
.songlistplay i{color:#00070e;font-size:1.25rem;cursor:pointer;}
.songBanner{flex:1;min-width:220px;background:linear-gradient(180deg,#e904f1,#0731eb);padding:16px;border-radius:14px;border:1px solid #e9094c;display:flex;justify-content:center;align-items:center;}
.coverBlock{display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;}
.coverImg{width:200px;height:180px;object-fit:cover;border-radius:14px;border:1px solid #334155;}
.playingGif{width:200px;filter:drop-shadow(0 0 5px #018efa);border-radius: 12px;}
.bottom{position:sticky;bottom:0;background:#0554f1ea;border-top:1px solid #0e0e0e;color:#fff;padding:10px 16px;display:flex;flex-direction:column;align-items:center;gap:10px;}
#myProgressBar{width:100%;max-width:860px;accent-color:#22c55e;}
.icons{display:flex;justify-content:center;align-items:center;gap:26px;}
.icons i{cursor:pointer;color:#0f0110;}
@media(max-width:900px){.container{flex-direction:column;}.songBanner{min-height:170px;}}

#JAVA Script
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
myProgressBar.addEventListener('change', ()=>{ if(audioElement.duration) audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100; });
const makeAllPlays = ()=>{ Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ element.classList.replace('fa-pause-circle','fa-play-circle'); }); };
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

