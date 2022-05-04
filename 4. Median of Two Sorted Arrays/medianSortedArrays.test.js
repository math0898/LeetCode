const findMedianSortedArrays = require('./medianSortedArrays');

test('Example 1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

test('Example 2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

test('Random Numbers', () => {
    expect(findMedianSortedArrays([6, 12, 13, 72, 1056], [20, 45, 57, 96, 20000])).toBe(51);
});

test('Repeating Numbers', () => {
    expect(findMedianSortedArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4], [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4])).toBe(3);
});
