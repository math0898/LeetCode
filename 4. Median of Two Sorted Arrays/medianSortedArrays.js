/**
 * Finds the median value between two arrays.
 * 
 * @param {number[]} nums1 The first input array.
 * @param {number[]} nums2 The second input array.
 * @return {number} The median value of the two arrays.
 */
function findMedianSortedArrays (nums1, nums2) {
    return approach1(nums1, nums2);
    // return approach2(nums1, nums2);
} module.exports = findMedianSortedArrays;

/**
 * Approach 1: O(n + m). Merge arrays to a sorted array then compute median.
 * 
 * @param {number[]} nums1 The first input array.
 * @param {number[]} nums2 The second input array.
 * @return {number} The median value of the two arrays.
 */
function approach1 (nums1, nums2) {
    var merged = [];
    var nums1_i = 0;
    var nums2_i = 0;
    // Merge
    while (nums1_i < nums1.length && nums2_i < nums2.length) {
        if (nums1[nums1_i] < nums2[nums2_i]) merged.push(nums1[nums1_i++]);
        else merged.push(nums2[nums2_i++]);
    }
    // Add remaining items
    while (nums1_i < nums1.length) merged.push(nums1[nums1_i++]);
    while (nums2_i < nums2.length) merged.push(nums2[nums2_i++]);
    // Compute median
    if (merged.length % 2 == 0) return (merged[(merged.length / 2) - 1] + merged[(merged.length / 2)]) / 2;
    else return merged[(merged.length - 1) / 2];
}

/**
 * Approach 2: O(log(n+m)). Binary search each array in place to the one or two elements in the middle.
 * 
 * @param {number[]} nums1 The first input array.
 * @param {number[]} nums2 The second input array.
 * @return {number} The median value of the two arrays.
 */
function approach2 (nums1, nums2) {
    var mid1 = nums1[Math.floor(nums1.length / 2)];
    var mid2 = nums2[Math.floor(nums2.length / 2)];

    if (nums1.length + nums2.length % 2 === 0) median = (mid1 + mid2) / 2;
    else median = mid1 < mid2 ? mid1 : mid2;
    console.log(mid1 + " && " + mid2 + " => " + median);
    return median;
}
