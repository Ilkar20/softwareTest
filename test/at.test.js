import chai from "chai"
import at from "../src/at.js"
const expect = chai.expect


describe("at()", () => {
    it("find array from container", () =>{
        const object = { 'product': [{ 'item': { 'price': 3 } }, 4] }
        const value = at(object, ['product[0].item.price', 'product[1]'])
        expect(value).to.deep.equal([3, 4])
    });
    it("find integer value from container", () =>{
        const object = {'price': 1 }
        const value = at(object, 'price')
        expect(value).to.deep.equal([1])
    });
    it("find value from array", () =>{
        const object = {'product': ["item1", "item2", "item3", "item4"] }
        const value = at(object, 'product[0]')
        expect(value).to.deep.equal(["item1"])
    });
    it("find character from string", () =>{
        const object = "test"
        const value = at(object, '[0]')
        expect(value).to.deep.equal(["t"])
    });
    it("find character from string object", () =>{
        const object = new String("test")
        const value = at(object, '[0]')
        expect(value).to.deep.equal(["t"])
    });
    describe.skip('skip failing tests for at()', () => {        
        it("number parameters should throw an error", () =>{
            expect(at(1000, "[0]")).to.throw(Error);
        });
        it("null parameters should throw an error", () =>{
            expect(at(null, "[0]")).to.throw(Error);
        });
        it("undefined parameters should throw an error", () =>{
            expect(at(undefined)).to.throw(Error);
        });
    });
})