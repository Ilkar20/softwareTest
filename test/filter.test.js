import { expect } from "chai";
import { default as filter } from "../src/filter.js";

describe("filter() where: \n   const users = [{ 'user': 'barney', 'active': true },\n\
                  { 'user': 'fred', 'active': false }];", () => {
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
                   { 'user': 'fred', 'active': false }];

    it('filter by active', () => {
        const filteredArr = filter(users, ({ active }) => active);
        const expectedArr = [{ 'user': 'barney', 'active': true }];
        expect(filteredArr).to.eql(expectedArr); // equal vs eql
    });
    it('filter by !active', () => {
        const filteredArr = filter(users, ({ active }) => !active);
        const expectedArr = [{ 'user': 'fred', 'active': false }];
        expect(filteredArr).to.eql(expectedArr);
    });
    it('filter by name: barney', () => {
        const filteredArr = filter(users, ({ user }) => user === 'barney');
        const expectedArr = [{ 'user': 'barney', 'active': true }];
        expect(filteredArr).to.eql(expectedArr);
    });
    it("filter by name: ''", () => {
        const filteredArr = filter(users, ({ user }) => user === '');
        const expectedArr = [[]];
        expect(filteredArr).to.eql(expectedArr);
    });
});