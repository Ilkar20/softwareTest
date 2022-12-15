import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect


describe("ceil", () => {
    it("computes decimal rounded up to integer", () =>{
        expect(ceil(4.002)).to.equal(5)
    });
})