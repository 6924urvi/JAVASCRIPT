const size = 5;

console.log("Pattern 1");
for (let i = 0; i < size; i++) {
    let row = '';

    for (let j = 0; j <= size; j++) {
        if ((i === 0 && (j === 3 || j === 5)) ||
            (i === 1 && (j === 2 || j === 4)) ||
            (i === 2 && (j === 1 || j === 3)) ||
            (i === 3 && (j === 2 || j === 4)) ||
            (i === 4 && (j === 3 || j === 5))) {
            row += '*   ';
        } else {
            row += '    ';
        }
    }
    console.log(row);
}