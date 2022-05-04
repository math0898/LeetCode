/**
 * Finds the median value between two arrays.
 * 
 * @param {number[]} nums1 The first input array.
 * @param {number[]} nums2 The second input array.
 * @return {number} The median value of the two arrays.
 */
function findMedianSortedArrays (nums1, nums2) {
    var median = 0;

    /*
     * Approach 1: O(n + m). Merge arrays to a sorted array then compute median.
     */
    var merged = [];
    var nums1_i = 0;
    var nums2_i = 0;
    // Merge
    while (nums1_i < nums1.length && nums2_i < nums2.length) {
        if (nums1[nums1_i] < nums2[nums2_i]) merged.push(nums1[nums1_i++]);
        else merged.push(nums2[nums2_i++]);
    }
    // Admittedly difficult to maintain.
    while (nums1_i < nums1.length) merged.push(nums1[nums1_i++]);
    while (nums2_i < nums2.length) merged.push(nums2[nums2_i++]);
    // Compute median
    if (merged.length % 2 == 0) median = (merged[(merged.length / 2) - 1] + merged[(merged.length / 2)]) / 2;
    else median = merged[(merged.length - 1) / 2];

    return median;
} module.exports = findMedianSortedArrays;
