import chai from "chai"
import at from "../src/at.js"
const expect = chai.expect


describe("at", () => {
    it("find value from object", () =>{
        const object = { 'product': [{ 'item': { 'price': 3 } }, 4] }
        const value = at(object, ['product[0].item.price', 'product[1]'])
        expect(value).to.deep.equal([3, 4])
    });
})