//import chai from "chai"
//import divisionOfIntegers from "../divisionOfIntegers.js";
//const except = chai.expect
var chai = require("chai")
var divisionOfIntegers = require ("../divisionOfIntegers.js")
const expect = chai.expect
var should = require('chai').should()


describe("DOI", () => {

    it("Non numbers", () => {
        expect(function(){divisionOfIntegers(5,"S")}).to.throw(TypeError)
    });
    it("Non numbers", () => {
        expect(function(){divisionOfIntegers(5,0)}).to.throw(RangeError)
    });
    it("Non numbers", () => {
        expect(divisionOfIntegers(5,4)).to.deep.equal({"quotient": 1, "reminder" : 1})
    });
    it("Non numbers", () => {
        expect(divisionOfIntegers(-5,4)).to.deep.equal({"quotient": -1, "reminder" : 1})
    });

})