/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    // We create a Map to store each number and its index as we iterate through the array.

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        // We calculate its complement (the number needed to reach the target sum).

        if (map.has(complement)) {
            // We check if this complement exists in our map.
            return [map.get(complement), i];
            // If it does, we've found our pair and return their indices.
        }

        map.set(nums[i], i)
        // If not, we add the current number and its index to the map.
    }

    return [];
};
