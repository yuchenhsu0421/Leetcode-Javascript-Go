// 6. Zigzag Conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if (numRows === 1) return s;

    const rows = new Array(numRows).fill('');
    let currentRow = 0;
    let step = 1; 

    for (let char of s) {
        rows[currentRow] += char;

        if (currentRow === 0) step = 1; 
        if (currentRow === numRows - 1) step = -1;

        currentRow += step; 
    }

    return rows.join('');
    
};


// Iteration 1: P (currentRow = 0, step = 1)
// P
// Iteration 2: A (currentRow = 1, step = 1)
// P
// A
// Iteration 3: Y (currentRow = 2, step = -1)
// P
// A
// Y
// Iteration 4: P (currentRow = 1, step = -1)
// P
// AP
// Y
// Iteration 5: A (currentRow = 0, step = 1)
// PA
// AP
// Y
// ... and so on
