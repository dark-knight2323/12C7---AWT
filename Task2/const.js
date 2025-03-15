const b = 10;
{
    const b = 20;
    console.log("Accessing value of b in block scope using const keyword: "+b);
}
console.log("Accessing value of b in global scope using const keyword: "+b);