function greet(name){
    console.log("Hello , Good morning "+ name);
}
setTimeout(greet, 5000, "Suman");

let timeOut = setTimeout(greet, 2000, "Suman");
console.log("The code of the setTimeout function is "+ timeOut);
clearTimeout(timeOut);