const calculateRectangleArea = (length, width) => length * width;

const calculateTriangleArea = (base, height) => 0.5 * base * height;

const calculateCircleArea = radius => Math.PI * radius * radius;

const main = () => 
    {
    let choice = prompt("Enter the shape :");

    if (choice === "rectangle") {
        let length = parseFloat(prompt("Enter the length of the rectangle:"));
        let width = parseFloat(prompt("Enter the width of the rectangle:"));
        let area = calculateRectangleArea(length, width);
        console.log("The area of the rectangle is: " + area);
    } 
    else if (choice === "triangle") 
        {
        let base = parseFloat(prompt("Enter the base of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        let area = calculateTriangleArea(base, height);
        console.log("The area of the triangle is: " + area);
        } 
        else if (choice === "circle") 
            {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));
        let area = calculateCircleArea(radius);
        console.log("The area of the circle is: " + area);
        } 
        else 
        {
        console.log("Invalid choice. Please enter 'rectangle', 'triangle', or 'circle'.");
    }
}

main();