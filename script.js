
// function displayTime(){
//     time = new Date();
//        console.log(time);
//        document.getElementById('time').innerHTML = time;
// }


// let clear = setInterval(displayTime, 1000);
//  console.log(clear);
//  function stop(){
//          clearTimeout(clear);
//          console.log("The clear time out function was executed !");
//  }

function displayDate (){
    date = new Date();
    console.log(date);
    document.getElementById('time').innerHTML = date;
}


let timeOut = setInterval(displayDate, 2000);
 console.log(timeOut);
 
 function stop(){
    clearInterval(timeOut);
 }