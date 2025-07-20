// node 12 and up
//import chai from "chai"
//import sum from "../sum.js"
// below for node 10
var chai = require("chai")
var divisionOfIntegers = require ("../divisionOfIntegers.js")
const expect = chai.expect


describe("divisionOfIntegers", () => {
 it("divides number by another number", () =>{
     expect(divisionOfIntegers(5, 2)).to.deep.equal({'quotient': 2, 'reminder': 1})

     expect(function() {divisionOfIntegers(5, 0)}).to.throw("Divisor cannot be zero")

     //expect(function() {divisionOfIntegers("hi", 0)}).to.throw(TypeError)

     //expect(divisionOfIntegers(-5, 2)).to.deep.equal({'quotient': -2, 'reminder': -1})
 });
})