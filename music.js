const musicTitle = document.querySelector('.music-title');
const elbumImg = document.querySelector('.music-elbum');
const musicSrc = document.querySelector('#musicSrc');

const musicList = [
    {
        title:"Breathing in May",
        auther:"Jeon Jin Hee",
        img:"music/jeon jinhee.png",
        path:"music/Jeon Jin Hee - Breathing in May.mp3"
    },
    {
        title:"Fukurou",
        auther:"Kokia",
        img:"music/kokia.png",
        path:"music/Kokia - Fukurou.mp3"
    },
    {
        title:"Reminiscence",
        auther:"Lee Ruma",
        img:"music/lee ruma.png",
        path:"music/Lee Ruma - Reminiscence.mp3"
    },
    {
        title:"Reminiscence",
        auther:"Tales Weaber",
        img:"music/Tales Weaber_.png",
        path:"music/Tales Weaber - Reminiscence.mp3"
    },
    {
        title:"River Flows in You",
        auther:"Lee Ruma",
        img:"music/lee ruma.png",
        path:"music/Lee Ruma - River Flows in You.mp3"
    },

];

const randomMusicIndex = Math.floor(Math.random()*musicList.length);

musicTitle.innerText =  musicList[randomMusicIndex].title;
elbumImg.src = musicList[randomMusicIndex].img;
musicSrc.src = musicList[randomMusicIndex].path;

musicSrc.volume = 0.5;