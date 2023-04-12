/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergArr = [...nums1, ...nums2].sort((a,b) => a-b);
    if(mergArr.length % 2 === 0) {
        //It will enter this block if the length of modules is 0
        let specificPlace = Math.floor(mergArr.length/2);
        let median = (mergArr[specificPlace - 1] + mergArr[specificPlace]) /2;
        return median;
    } else {
        //It will enter this block if the length of modules is not 0
        let median = Math.floor(mergArr.length/2);
        return mergArr[median];
    }
};

console.log(findMedianSortedArrays([1,9,3],[2,6,10]))