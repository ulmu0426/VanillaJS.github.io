const clockHour = document.querySelector('#clock');
const yymmdd = document.querySelector('#clockYMD');

function realTime(){
    const date = new Date();
    let AMPM = "AM";
    let minutes = Math.ceil(date.getMinutes());
    let hours = Math.ceil(date.getHours());
    if(hours > 12){
        hours = hours % 12;
        AMPM = "PM";
    }    

    yymmdd.innerHTML =`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`

    clockHour.innerText = `${AMPM} ${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`;
    
}

realTime();
setInterval(realTime, 1000);