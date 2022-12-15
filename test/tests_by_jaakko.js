import { expect } from "chai";
//const filter = require('../src/filter');
import { default as filter } from "../src/filter.js";
import { default as add } from "../src/add.js";
import { default as isEmpty } from "../src/isEmpty.js";
import { default as eq } from "../src/eq.js";
import { default as toString } from "../src/toString.js";

describe('Component tests for components 1-5', () => {

    describe('filter()', () => {
    /**
     * Iterates over elements of `array`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index, array).
     *
     * **Note:** Unlike `remove`, this method returns a new array.
     *
     * @since 5.0.0
     * @category Array
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
     * @example
     *
     * const users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ]
     *
     * filter(users, ({ active }) => active)
     * // => objects for ['barney']
     */
        const users = [{ 'user': 'barney', 'active': true },
                       { 'user': 'fred',   'active': false }];

        it('should behave as in the documented example', () => {
            const filteredArr = filter(users, ({ active }) => active);
            const expectedArr = [{ 'user': 'barney', 'active': true }];
            expect(filteredArr).to.eql(expectedArr); // equal vs eql
        });
    });
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
            expect(add(6,4)).to.equal(10); // equal vs eql
        });
    });
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

        it('isEmpty([1, 2, 3]) should return false', () => {
            expect(isEmpty([1, 2, 3])).to.equal(false);
        });
    });
    describe('eq()', () => {
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * const object = { 'a': 1 }
     * const other = { 'a': 1 }
     *
     * eq(object, object)
     * // => true
     *
     * eq(object, other)
     * // => false
     *
     * eq('a', 'a')
     * // => true
     *
     * eq('a', Object('a'))
     * // => false
     *
     * eq(NaN, NaN)
     * // => true
     */

        it("eq('a', 'a') should return true", () => {
            expect(eq('a', 'a')).to.equal(true);
        });
    });
    describe('toString()', () => {
    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * toString(null)
     * // => ''
     *
     * toString(-0)
     * // => '-0'
     *
     * toString([1, 2, 3])
     * // => '1,2,3'
     */
    
        it("toString([1, 2, 3]) should return '1,2,3'", () => {
            expect(toString([1, 2, 3])).to.equal('1,2,3');
        });
    });
});