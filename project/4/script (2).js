function calculateGrossSalary(basicSalary, allowances, deductions) 
{
    let grossSalary = basicSalary + allowances - deductions;
    return grossSalary;
}

function getUserInput() 
{
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let allowances = parseFloat(prompt("Enter allowances:"));
    let deductions = parseFloat(prompt("Enter deductions:"));
    
    return { basicSalary, allowances, deductions };
}


function main() 
{
    const { basicSalary, allowances, deductions } = getUserInput();

    if (isNaN(basicSalary) || isNaN(allowances) || isNaN(deductions)) 
    {
        console.log("Invalid input. Please enter numeric values.");
        return;
    }

    let grossSalary = calculateGrossSalary(basicSalary, allowances, deductions);

    console.log("Gross Salary:", grossSalary);
}

main();