const colors = [
    "#f7f1a6",
    "#fcdabd",
    "#ffd1d1",
    "#e0ffd1",
    "#d1ffdf",
    "#d1fff1",
    "#d1e6ff",
    "#d1d3ff",
    "#e6d1ff",];

const index0 =  Math.floor(Math.random()*colors.length);
const chosenColor1 = colors[index0];

let index1 = Math.floor(Math.random()*colors.length);
while(index0 === index1){
    index1 = Math.floor(Math.random()*colors.length);
}
const chosenColor2 = colors[index1];

const bodyStyle = document.querySelector('body');

bodyStyle.style.backgroundImage = `linear-gradient(${chosenColor1},${chosenColor2})`;