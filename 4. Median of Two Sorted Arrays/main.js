const prompt = require('prompt-sync')();
const findMedianSortedArrays = require('./medianSortedArrays');

function sort (a, b) { return a - b } 
var n = prompt('Array 1 size: ');
var m = prompt('Array 2 size: ');
var nums1 = [];
var nums2 = [];

for (var i = 0; i < n; i++) nums1.push(prompt('Next number in array 1: ') - '0');
for (var i = 0; i < m; i++) nums2.push(prompt('Next number in array 2: ') - '0');

nums1.sort(sort);
nums2.sort(sort);
 
console.log('The median of the two arrays is: ' + findMedianSortedArrays(nums1, nums2));
