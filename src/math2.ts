'use strict';

test('sum 2 + 2 equals 4', () => {
    expect(2 + 2).toBe(4);
});

describe('math operations', () => {
    test('2 + 2 equals 4', () => {
        expect(2 + 2).toBe(4);
    });

    test('3 + 3 equals 6', () => {
        expect(3 + 3).toBe(6);
    });
      test('3 * 3 equals 9', () => {
        expect(3 * 3).toBe(9);
    });
});


function willThrow(): void {
    throw new Error('error');
}
// always throws an error
// void -> does not return value 

test('throw an error', () => {
    expect(() => willThrow()).toThrow('error');
}); // wrong way to do it


const testValues: [number, number, number][] = [
    [1, 1, 2],
    [2, 3, 5],
    [0, 0, 0]
]; // multiple inputs

test.each(testValues)('sum(%i, %i) = %i', (a, b, expected) => {
    expect(a + b).toBe(expected);
}); // %i -> placeholder for numbers in the test name.


const testValues2: [string, number, number, number][] = [
    ['adding positives', 2, 3, 5],
    ['adding negatives', -1, -1, -2]
];

test.each(testValues2)('%s', (label, a, b, expected) => {
    expect(a + b).toBe(expected);
});

test('0.1 + 0.2 is approx 0.3', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
});
