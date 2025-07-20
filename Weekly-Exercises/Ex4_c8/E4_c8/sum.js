/**
 * Sums two numbers
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 */

 function sum(augend, addend){
    if (!(typeof(augend)==='number') || !(typeof(addend)==='number'))
    {
        throw new TypeError("Only for numbers >:(")
    }
    else{
        return augend + addend
    }
    
 }

 // node 12 and up
 //export default sum
 // below for node 10
 module.exports = sum
