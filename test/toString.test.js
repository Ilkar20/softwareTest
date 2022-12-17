import { expect } from "chai";
import { default as toString } from "../src/toString.js";

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
    const someSymbol = Symbol('foo');
    it("toString(someSymbol) should return 'Symbol(foo)'", () => {
        expect(toString(someSymbol)).to.equal('Symbol(foo)');
    });
    it("toString([1, 2, 3]) should return '1,2,3'", () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });
    it("toString(null) should return ''", () => {
        expect(toString(null)).to.eql('');
    });
    it("toString(undefined) should return ''", () => {
        expect(toString(undefined)).to.eql('');
    });
    it("toString(-0) should return '-0'", () => {
        expect(toString(-0)).to.equal('-0');
    });
    it("toString('') should return ''", () => {
        expect(toString('')).to.equal('');
    });
});