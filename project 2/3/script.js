function Max(num1, num2, num3, num4)
    {
        let largest;
    
        if(num1 >= num2 && num1 >= num3 && num1 >= num4)
        {
            largest = num1;
        }
        else if (num2 >= num3 && num2 >= num4) 
        {
            largest = num2;
        }
          else if (num3 >= num4) 
        {
            largest = num3;
        }
        else 
        {
            largest = num4;
        }
    
    return largest;
    }
    const num1 = prompt("Enter First number: ");
    const num2 = prompt("Enter Second number: ");
    const num3 = prompt("Enter Third number: ");
    const num4 = prompt("Enter Fourth number: ");
    
    let largest = Max(num1, num2, num3, num4);
    
    console.log("The largest number is " + largest);