//generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;
const startColorChanging = function () {
    if(!intervalId){ 
        intervalId = setInterval(changeBgColor, 1000/8);
    }
 function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
 }
};

const stopColorChanging = function(){
    clearTimeout(intervalId);
    intervalId = null;
};

document.querySelector('#start').
addEventListener('click', startColorChanging)

document.querySelector('#stop').
addEventListener('click', stopColorChanging)
