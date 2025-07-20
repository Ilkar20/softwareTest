/**
 * Divides two numbers
 * @param {number} dividend The dividend (number to be divided)
 * @param {number} divisor The divisor (number that divides)
 * @returns {Object} Returns the object that contains the 
 * quotient and reminder.
 * 
 * divisionOfIntegers(5,2)
 * // => {'quotient': 2, 'reminder': 1}
 * 
 * TypeError when non-integers
 * RangeError when dividing with zero
 * 
 */

function divisionOfIntegers(dividend, divisor){
    if (!(Number.isInteger(dividend) && Number.isInteger(divisor)))
    {
        //return{'quotient': 2, 'reminder': 1} // introduced bug, should throw 
        throw new TypeError("Only for integers >:(")
    }
    if(divisor == 0)
    {
        throw new RangeError("Divisor cannot be zero")
    }
    
 
    var m = 1

    if (dividend>0 && divisor>0)
    {
        m = 1
    }
    if (dividend<0 && divisor>0)
    {
        dividend = dividend*-1
        m = -1
    }
    if (dividend>0 && divisor <0)
    {
        divisor = divisor*-1
        m = -1
    }
    if (dividend<0 && divisor<0)
    {
        dividend = dividend*-1
        divisor = divisor*-1
        m = 1
    }
    var quotient = 0
    var reminder = dividend
    while (reminder >= divisor)
    {
        quotient = quotient+1
        reminder = reminder-divisor
    }


    return{'quotient': m*quotient, 'reminder': reminder}
}


//export default divisionOfIntegers
// below for node 10
module.exports = divisionOfIntegers