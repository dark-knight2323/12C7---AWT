function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const generator = numberGenerator();

console.log(generator.next().value);  
console.log(generator.next().value);  
console.log(generator.next().value);  
console.log(generator.next().value);  
console.log(generator.next().done); 