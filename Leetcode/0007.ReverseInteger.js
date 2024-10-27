/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    const isNegative = x < 0;

    let numStr = Math.abs(x).toString();

    let reversed = '';
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversed += numStr[i]; 
    }

    let result = parseInt(reversed);
    if (isNegative) {
        result = -result;
    }

    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);

    if (result > MAX_INT || result < MIN_INT) {
        return 0;
    }



    return result;



};
