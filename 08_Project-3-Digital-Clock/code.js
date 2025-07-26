const clock = document.getElementById('clock');

//set interval use for continous time change
setInterval(function (){ 
    let date = new Date(); //ye date set kr dega 
    clock.innerHTML = date.toLocaleTimeString(); //ye time set kr dega
},1000); // every 1sec m time change hoga continously
