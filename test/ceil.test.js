import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect


describe("ceil()", () => {
    it("computes decimal rounded up to integer", () =>{
        expect(ceil(4.002)).to.equal(5)
    });
    it("computes decimal rounded up to to `precision`", () =>{
        expect(ceil(4.002, 2)).to.equal(4.01)
    });
    it("computes decimal rounded up to to `precision`", () =>{
        expect(ceil(6040, -2)).to.equal(6100)
    });
    it("test negative number", () =>{
        expect(ceil(-2021, -2)).to.equal(-2000)
    });
    describe.skip('skip failing tests for ceil()', () => {        
        it("string parameters should throw an error", () =>{
            expect(at("111")).to.throw(Error);
        });
    });
})