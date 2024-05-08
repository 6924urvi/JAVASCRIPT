function Check(number)
{
const result = number % 2 === 0 ? "even" : "odd";
console.log(`${number} is ${result}.`);
}

const number = prompt("Enter a Number :");
Check(number);