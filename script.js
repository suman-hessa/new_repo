
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
/*
function displayDate (){
    date = new Date();
    console.log(date);
    document.getElementById('time').innerHTML = date;
}


let timeOut = setTimeout(displayDate, 5000);
 console.log(timeOut);
 
 function stop(){
    clearTimeout(timeOut);
    console.log("The clear timeout function was executed");
 }
 */

// let newDate = new Date("2003-07-16");
// console.log(newDate);

// new Date = new Date(year , month, date,  hour , minutes, seconds, milliseconds);
// let nowDate = new Date(2003,6, 16, 7, 30, 10, 10);
// console.log(nowDate);


// console.log(time);



// function clock (){
//     let time = new Date();
//     let hr = time.getHours();
// let min = time.getMinutes();
// let sec = time.getSeconds();
// console.log(`${hr}:${min}:${sec}`);
// let clk = document.getElementById('time').innerHTML = (`${hr}:${min}:${sec}`);
// }
// let intv = setInterval(clock, 1000);

// function stop (){
//     clearInterval(intv);
// }


let greet = () =>{
   console.log("Good morning and have a nice day. ");
}

greet();

let add = (a,b) =>{
   return a +b ;
}

let ad = (a, b, c) => a+b+c;

let factorial = a => {
     let fact = 1;
   for(let i =1;i<=a;i++){
      fact *=i;
   }
   console.log(`The factorial of ${a} is ${fact}`);
}

let names = ["sohan", "mohan", "arpan", "nina"];

let greetings = "good morning";
let object1 ={
    greetings : "Good night", 
    names : ["suman", "Adarsh", "Badal", "Bhanu"], 
     speak(){
       this.names.forEach((students)=>{
         console.log(this.greetings +" "+ students);
       });
       }
     }
     object1.speak();
