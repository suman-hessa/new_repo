
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

/*
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


   let speak = ()=> "Hello World";

   let arr = [5, 4, 3, 2, 1];
   function hello (){
      let arr = [1 ,2 ,3 , 4 ,5 ];
       this.forEach(function f(element){
         console.log(element);
       });
   }
 
       function printNum(item){
         console.log(item);
       }

   let numbers = ["suman", "rahul" , "sohan", "mohan"];
   numbers.forEach(printNum);
   


  let m = Math;
  console.log(m);
 console.log("The value of Math.E is "+Math.E);
 console.log("The value of Math.PI is "+Math.PI);

let a = 34; 
let b = 34.23434;
let c = 90.34;

console.log("The round of a and b are : "+ Math.round(a), Math.round(b));

console.log("3 raised to the power 3 is :"+ Math.pow(3, 3));
console.log("2 raised to the power 5 is :"+ Math.pow(2, 5));
console.log("2 raised to the power 3 is :"+ Math.pow(2, 3));

console.log("The square root of 25 is "+Math.sqrt(25));
console.log("The square root of 3 is :"+ Math.sqrt(3));
console.log("The square root of 2 is :"+ Math.sqrt(2));

// for rounding up and down of the value : 

console.log("The rounding of the value 39. 3 is :"+Math.ceil(39.4));
console.log("The rounding off the value 3.9 is :"+ Math.floor(3.9));

let r = Math.random();
console.log("This is our random number without being rounded :", r);
console.log("This is our random number : ",Math.round(r));

// let find the random number between 50 and 100 : 
  let x = 50;
  let y = 100;
let r1 = x + (y-x)*Math.random();

console.log("The random number between 50 and 100 is : ", Math.round(r1));
console.log("The random no. is : " + Math.random()*100);
*/
// let's know about JSON : 

let jsonObj = {
  name : "Suman", 
  channel : "Dark Gamer's Zone ", 
  age  : 20, 
  gender : "male"
}

console.log(jsonObj);

// JSON is used to transfer one object from one server to another by first converting that object into string and then transfer it to any server

let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr = myJsonStr.replace("Suman", "Duman");
console.log(myJsonStr.length)
console.log(myJsonStr.indexOf("Duman"));
console.log(myJsonStr);

let newJsonStr = JSON.parse(myJsonStr);
console.log(newJsonStr);
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

text = JSON.parse(text);
console.log(text);