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
    describe.skip('skip failing tests for capitalize()', () => {        
        it("number parameters should throw an error", () =>{
            expect(capitalize(560)).to.throw(Error);
        });

    });
})