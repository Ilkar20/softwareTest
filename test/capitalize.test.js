import chai from "chai"
import capitalize from "../src/capitalize.js"
const expect = chai.expect


describe("capitalize()", () => {
    it("Converts the string 'FRED' to 'Fred'", () =>{
        expect(capitalize('FRED')).to.equal('Fred')
    });
    it("Converts the string 'foo' to 'Foo'", () =>{
        expect(capitalize('foo')).to.equal('Foo')
    });
    it("Converts the string object 'test' to 'Test'", () =>{
        expect(capitalize(new String("test"))).to.equal('Test')
    });
    it("test number parameters", () =>{
        expect(capitalize("560")).to.equal('560')
    });
    it("test special string value", () =>{
        expect(capitalize("#%5t")).to.equal('#%5t')
    });
})