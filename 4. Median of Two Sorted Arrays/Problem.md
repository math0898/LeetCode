# 4. Median of Two Sorted Arrays

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return __the median__ of the two sorted arrays.

The overall time complexity should be `O(log (m+n))`.

__Example 1:__

```MD
__Input:__ nums1 = [1,3], nums2 = [2]
__Output:__ 2.00000
__Explanation:__ merged array = [1,2,3] and median is 2.
```

__Example 2:__

```MD
__Input:__ nums1 = [1,2], nums2 = [3,4]
__Output:__ 2.50000
__Explanation:__ merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

__Constraints:__

```MD
- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -10^6 <= nums1[i], nums2[i] <= 10^6
```

[Median of Two Sorted Arrays on LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Approach 1: O(n + m)

Merge arrays to a sorted array then compute median.

[Submission](https://leetcode.com/submissions/detail/693261980/)

[Commit](https://github.com/math0898/LeetCode/tree/30501c0242c1dfc2e002fa1de61a6da981289371)

## Approach 2: O(log (m+n))

Binary search each array in place to the one or two elements in the middle.
