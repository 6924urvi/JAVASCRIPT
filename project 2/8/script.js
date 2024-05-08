function add(salary) 
{
    let finalSalary = salary;

    if (salary >= 1000 && salary < 5000) 
    {
        finalSalary += 1000;
    } 
    else if (salary >= 5000 && salary < 10000) 
    {
        finalSalary += 2000;
    } 
    else if (salary >= 10000 && salary < 20000) 
    {
        finalSalary += 3000;
    } 
    else if (salary >= 20000 && salary < 50000) 
    {
        finalSalary += 4000;
    }

    return finalSalary;
}

let salary = parseInt(prompt("Enter Salary :"));
let increment = add(salary);
console.log(increment);