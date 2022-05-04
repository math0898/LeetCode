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
    var nums1I = 0;
    var nums2I = 0;
    for (var i = 0; i < nums1.length + nums2.length; i++) {
        if (nums1I == nums1.length) {
            merged.push(nums2[nums2I]);
            nums2I++;
            continue;
        } else if (nums2I == nums2.length) {
            merged.push(nums1[nums1I]);
            nums1I++;
            continue;
        }
        if (nums1[nums1I] < nums2[nums2I]) {
            merged.push(nums1[nums1I]);
            nums1I++;
        } else { // TODO: Case where the two terms are equal... no duplicates in merged array.
            merged.push(nums2[nums2I]);
            nums2I++;
        }
    }
    console.log(merged);
    // Compute median
    if (merged.length % 2 == 0) median = (merged[(merged.length / 2) - 1] + merged[(merged.length / 2)]) / 2;
    else median = merged[(merged.length - 1) / 2];

    return median;
} module.exports = findMedianSortedArrays;
