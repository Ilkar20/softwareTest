import { expect } from "chai";
import isPrototype from "../src/.internal/isPrototype.js";
import { default as isEmpty } from "../src/isEmpty.js";

describe('isEmpty()', () => {
    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * isEmpty(null)
     * // => true
     *
     * isEmpty(true)
     * // => true
     *
     * isEmpty(1)
     * // => true
     *
     * isEmpty([1, 2, 3])
     * // => false
     *
     * isEmpty('abc')
     * // => false
     *
     * isEmpty({ 'a': 1 })
     * // => false
     */
    const testObject = {name: "test"};
    const emptyMap = new Map();
    const emptySet = new Set();
    const mapWithStuff = new Map();
    mapWithStuff.set(0, 'stuff');
    const setWithStuff = new Set();
    setWithStuff.add(10);

    it('isEmpty(testObject) should return false', () => {
        expect(isEmpty(testObject)).to.equal(false);
    });
    it('isEmpty(Object.getPrototypeOf(testObject)) should return true', () => {
        expect(isEmpty(Object.getPrototypeOf(testObject))).to.equal(true);
    });
    it('isEmpty(mapWithStuff) should return false', () => {
        expect(isEmpty(mapWithStuff)).to.equal(false);
    });
    it('isEmpty(setWithStuff) should return false', () => {
        expect(isEmpty(setWithStuff)).to.equal(false);
    });
    it('isEmpty([1, 2, 3]) should return false', () => {
        expect(isEmpty([1, 2, 3])).to.equal(false);
    });
    it('isEmpty([1]) should return false', () => {
        expect(isEmpty([1])).to.equal(false);
    });
    it("isEmpty('abc') should return false", () => {
        expect(isEmpty('abc')).to.equal(false);
    });
    it("isEmpty({ 'a': 1 }) should return false", () => {
        expect(isEmpty({ 'a': 1 })).to.equal(false);
    });
    it('isEmpty(null) should return true', () => {
        expect(isEmpty(null)).to.equal(true);
    });
    it('isEmpty(true) should return true', () => {
        expect(isEmpty(true)).to.equal(true);
    });
    it('isEmpty(1) should return true', () => {
        expect(isEmpty(1)).to.equal(true);
    });
    it('isEmpty([]) should return true', () => {
        expect(isEmpty([])).to.equal(true);
    });
    it('isEmpty({}) should return true', () => {
        expect(isEmpty({})).to.equal(true);
    });
    it('isEmpty(emptyMap) should return true', () => {
        expect(isEmpty(emptyMap)).to.equal(true);
    });
    it('isEmpty(emptySet) should return true', () => {
        expect(isEmpty(emptySet)).to.equal(true);
    });
});