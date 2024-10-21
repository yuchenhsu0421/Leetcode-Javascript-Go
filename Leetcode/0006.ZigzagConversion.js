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
