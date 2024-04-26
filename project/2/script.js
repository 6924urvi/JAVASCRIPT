function calculateGrossSalary(basicSalary, allowances, deductions) {
    // Calculate gross salary
    let grossSalary = basicSalary + allowances - deductions;
    return grossSalary;
}

// Function to get user input
function getUserInput() {
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let allowances = parseFloat(prompt("Enter allowances:"));
    let deductions = parseFloat(prompt("Enter deductions:"));
    
    return { basicSalary, allowances, deductions };
}

// Main function
function main() {
    // Get user input
    const { basicSalary, allowances, deductions } = getUserInput();

    // Validate input
    if (isNaN(basicSalary) || isNaN(allowances) || isNaN(deductions)) {
        console.log("Invalid input. Please enter numeric values.");
        return;
    }

    // Calculate gross salary
    let grossSalary = calculateGrossSalary(basicSalary, allowances, deductions);

    // Display result
    console.log("Gross Salary:", grossSalary);
}

// Call main function
main();
