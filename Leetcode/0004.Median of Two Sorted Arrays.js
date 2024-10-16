/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

// 确保 nums1 是较短的数组，如果不是，就交换它们

    const m = nums1.length;
    const n = nums2.length; 
    
    let low = 0; 
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        // 在较短的数组上进行二分搜索，寻找一个分割点
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minRightX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
        
        const maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minRightY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
        // 左半部分的最大值小于等于右半部分的最小值
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }

    }

    throw new Error("Array are not sorted");

};
