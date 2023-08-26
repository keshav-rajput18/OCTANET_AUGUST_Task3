console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "『Suzume』Theme Song", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "DRAGON BALL Z HINDI", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Lucky Man Opening Theme (IN HINDI)", filePath: "songs/3.mp3", coverPath: "https://imgs.search.brave.com/lgw-F0JR3TrMd8awh7E1ztNgQJWuI7l_HVk9Z0Z2RaM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZjLzVi/L2VmLzZjNWJlZjRk/OWY0NjI4NmQ2MGIw/NWFkZTJmOTkzNzJj/LmpwZw"},
    {songName: "Kochikame - Hindi Opening", filePath: "songs/4.mp3", coverPath: "https://imgs.search.brave.com/kua5iYSW5svKuLwR9ufgWOqRB56agK2FUGM_WQ38KEI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UwLzlm/L2UzL2UwOWZlMzZj/NTY4YzAwOWM4ZjBi/Zjk4OTYxYTQ3YTFj/LS1yYW1lbi1jaGls/ZGhvb2QuanBn"},
    {songName: "Detective conan theme song ", filePath: "songs/5.mp3", coverPath: "https://imgs.search.brave.com/p2q1Qk81-bfswTpHJAI94OD0FUbsYtdXRYh8BitCcxw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9lcGFuSXd0/LmpwZw"},
    {songName: "Doraemon song jeene ka sahi dhang", filePath: "songs/2.mp3", coverPath: "https://c4.wallpaperflare.com/wallpaper/499/281/74/anime-doraemon-wallpaper-preview.jpg"},
    {songName: "Perman Opening Song in Hindi", filePath: "songs/2.mp3", coverPath: "https://assets.change.org/photos/5/kb/tj/kDKbtJXbpiLwook-800x450-noPad.jpg?1572421430"},
    {songName: "Ninja Hattori Theme Song", filePath: "songs/2.mp3", coverPath: "https://i.ytimg.com/vi/mDZTRT0RO2o/hqdefault.jpg"},
    {songName: "Pokemon opening song", filePath: "songs/2.mp3", coverPath: "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season01/season01_ep01_ss04.jpg"},
    {songName: "Kiteretsu Hindi Title Song", filePath: "songs/4.mp3", coverPath: "https://m.media-amazon.com/images/M/MV5BN2EwNTMwZmMtZWIwMy00ZmJmLThiNDUtZTcxNDI5OTllNTY2XkEyXkFqcGdeQXVyMTE2MDU0NzAw._V1_.jpg"},
    {songName: "Ben 10 Theme Song", filePath: "songs/1.mp3", coverPath: "https://i1.sndcdn.com/artworks-fBYyBWqcF8IHwdok-tjqgnQ-t500x500.jpg"},
    {songName: "Shinchan Opening", filePath: "songs/1.mp3", coverPath: "https://ik.imagekit.io/j83rchiauw/A_List_Star/shinchan-dub-images-tring.jpg"},
    {songName: "Perman Ending Theme Song", filePath: "songs/1.mp3", coverPath: "https://i.ytimg.com/vi/sRmn79a_H1g/hqdefault.jpg"},
    {songName: "Ninja Hattori - Ending Song", filePath: "songs/1.mp3", coverPath: "https://pbs.twimg.com/media/EVToNniXgAEeCgA.jpg"},
    {songName: "Hagemaru Song", filePath: "songs/1.mp3", coverPath: "https://wallpaperaccess.com/full/2331496.jpg"},
    {songName: "Luffy baka song", filePath: "songs/1.mp3", coverPath: "https://i1.sndcdn.com/artworks-000056070659-e98l6i-t500x500.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
