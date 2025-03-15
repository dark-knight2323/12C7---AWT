let Person1={
    firstname:"raghuram",
    lastname:"rallabhandi"
};

let Person2={
    age:20
};
console.log(Person2.firstname);
Person2.__proto__=Person1;
console.log(Person2.firstname);

Object.setPrototypeOf(Person2,Person1);
console.log(Person2.firstname);
console.log(Person2.lastname);
console.log(Person2.age);

function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
function Admin(fname,lname){
    Person.call(this,fname,lname);
}

Admin.prototype=Person.prototype;
let a1=new Admin("CVR","A");
console.log(a1);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

let p1 = new Person("raghuram", 20);
p1.greet();









