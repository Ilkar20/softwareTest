import { expect } from "chai";
import { default as add } from "../src/add.js";

describe('add()', () => {
    /**
     * Adds two numbers.
     *
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * add(6, 4)
     * // => 10
     */
    it('add(6,4) should return 10', () => {
        expect(add(6, 4)).to.equal(10); // equal vs eql
    });
    it("add(undefined, undefined) should return default value 0", () => {
        expect(add(undefined, undefined)).to.equal(0);
    });
    describe.skip('skip failing tests for add()', () => {        
        it("faulty parameters should throw an error", () => {
            expect(add('5', 5)).to.throw(Error);            
        });
        it("faulty parameters should throw an error", () => {
            expect(add('test', 5)).to.throw(Error);
        });
        it("faulty parameters should throw an error", () => {
            expect(add(5, 'test')).to.throw(Error);
        });
    });
});