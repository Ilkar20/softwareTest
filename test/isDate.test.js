import chai, { assert } from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect


describe("isDate", () => {
    it("date object should return true", () =>{
        const date = new Date;
        expect(isDate(date)).to.equal(true)
    });
    it("string should return false", () =>{
        const date = "'Mon April 23 2012'";
        expect(isDate(date)).to.equal(false)
    });
})

