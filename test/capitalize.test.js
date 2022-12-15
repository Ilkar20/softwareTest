import chai from "chai"
import capitalize from "../src/capitalize.js"
const expect = chai.expect


describe("capitalize", () => {
    it("Converts the string 'FRED' to 'Fred'", () =>{
        expect(capitalize('FRED')).to.equal('Fred')
    });
})