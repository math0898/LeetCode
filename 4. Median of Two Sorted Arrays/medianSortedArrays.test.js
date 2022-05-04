const findMedianSortedArrays = require('./medianSortedArrays');

test('Example 1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

test('Example 2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});
