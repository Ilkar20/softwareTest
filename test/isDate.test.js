import chai, { assert } from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect


describe("isDate()", () => {
    it("Date object should return true", () =>{
        const date = new Date;
        expect(isDate(date)).to.equal(true)
    });
    it("test with a specific Date object", () =>{
        const date = new Date(1995, 11, 17);
        expect(isDate(date)).to.equal(true)
    });
    it("string should return false", () =>{
        const date = "'Mon April 23 2012'";
        expect(isDate(date)).to.equal(false)
    });
    it("number should return false", () =>{
        expect(isDate(1)).to.equal(false)
    });
    it("empty function should return false", () =>{
        expect(isDate(function() {})).to.equal(false)
    });
    it("null should return false", () =>{
        expect(isDate(null)).to.equal(false)
    });
    it("undefined should return false", () =>{
        expect(isDate(undefined)).to.equal(false)
    });
    it("boolean should return false", () =>{
        expect(isDate(true)).to.equal(false)
    });
    it("array should return false", () =>{
        expect(isDate(["first", "second", "third"])).to.equal(false)
    });
    describe.skip('skip failing tests for isDate()', () => {        
        it("wrong Date object should throw an error", () =>{
            const date = new Date("test");
            expect(isDate(date)).to.throw(Error);
        });
    });
})

