function numbers(num1, num2) 
{
    if (num1 == num2) 
    {
        console.log("The numbers are the same");
    } else if (num1 > num2) 
    {
        console.log("The first number is greater than the second number");
    } else 
    {
        console.log("The first number is less than the second number");
    }
}

let Check = prompt("Enter 1st Value :");
let Check2 = prompt("Enter 2nd Value :");
let Compare = numbers(Check , Check2);
console.log(Compare);