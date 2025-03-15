let hello = " ";
hello = function(){
    return "Hello World!"
}
console.log("hello world using normal function "+hello());

let hello2 = " ";
hello2 = (val) => "Hello " +val;
console.log("Printing Hello World using Arrow function");

console.log(hello2("Raghuram!"));

