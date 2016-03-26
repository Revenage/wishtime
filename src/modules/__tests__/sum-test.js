/**
 * Created by reven on 25.03.2016.
 */
jest.unmock('../sum'); // unmock to use the actual implementation of sum

import sum from '../sum';

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(7, 2)).toBe(9);
    });
});
