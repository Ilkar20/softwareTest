import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect


describe("toNumber()", () => {
    it("convert a string into a number", () =>{
        expect(toNumber("1")).to.equal(1)
    });
    it("number shouldn't be changed", () =>{
        expect(toNumber(1)).to.equal(1)
    });
    it("symbol should return NaN", () =>{
        expect(toNumber(Symbol("foo"))).to.deep.equal(NaN)
    });
    it("test object as parameter", () =>{
        const object = new Number(2);
        expect(toNumber(object)).to.deep.equal(2)
    });
    it("test function as parameter", () =>{
        const fun = function () {};
        expect(toNumber(fun)).to.deep.equal(NaN)
    });
    it("boolean should retuen 0 or 1", () =>{
        expect(toNumber(true)).to.deep.equal(1)
    });
    it("undefined should retuen NaN", () =>{
        expect(toNumber(undefined)).to.deep.equal(NaN)
    });
    it("convert binary to decimal", () =>{
        expect(toNumber("0b1111")).to.deep.equal(15)
    });
    it("convert octal to decimal", () =>{
        expect(toNumber("0o17")).to.deep.equal(15)
    });
    it("hexadecimal cannot be converted", () =>{
        expect(toNumber("+0xF")).to.deep.equal(NaN)
    });

})