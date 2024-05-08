
function calculateElectricityBill(units) 
{
    let totalBill = 0;

    if (units <= 50) 
    {
        totalBill = units * 0.50;
    } else if (units <= 150) 
    {
        totalBill = (50 * 0.50) + ((units - 50) * 0.75);
    } else if (units <= 250) 
    {
        totalBill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
    } else 
    {
        totalBill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
    }

    
    totalBill *= 1.20;

    return totalBill;
}


let units = parseInt(prompt("Enter the number of electricity units consumed:"));


let bill = calculateElectricityBill(units);
console.log("Total electricity bill: Rs. " + bill.toFixed(2)); 