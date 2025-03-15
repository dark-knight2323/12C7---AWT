const numbers=[1,2,3,4,5,6];
const [first,second,third,...fourth]=numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

const [first1,...second2]=numbers;
console.log(first1);
console.log(second2);