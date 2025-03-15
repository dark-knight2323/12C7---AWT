function Person2(first, last , age, branch) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.branch = branch;
}
const p2 = new Person2("Raghuram", "Rallabhandi", 20, "IT");
console.log(p2.firstName+ " " +p2.lastName+ "is studying in " +p2.branch+ " his age is : " +p2.age);
