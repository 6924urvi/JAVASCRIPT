const meterToFoot = meter => meter * 3.28084;

const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

const dollarToRupees = dollar => dollar * 74.5; 

const main = () => {
    let choice = parseInt(prompt("Choose the conversion:\n1. Meter to Foot\n2. Celsius to Fahrenheit\n3. Dollar to Rupees"));

    switch(choice) {
        case 1:
            let meter = parseFloat(prompt("Enter the value in meters:"));
            let foot = meterToFoot(meter);
            console.log(meter + " meters is equal to " + foot + " feet.");
            break;
        case 2:
            let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
            let fahrenheit = celsiusToFahrenheit(celsius);
            console.log(celsius + " Celsius is equal to " + fahrenheit + " Fahrenheit.");
            break;
        case 3:
            let dollar = parseFloat(prompt("Enter the amount in Dollar:"));
            let rupees = dollarToRupees(dollar);
            console.log(dollar + " Dollar is equal to " + rupees + " Rupees.");
            break;
        default:
            console.log("Invalid choice. Please choose from 1, 2, or 3.");
    }
}

main();