const array1 = [1, -3, 5];
const array2 = [-2, 3, -5, 7, 10];

function minMax(nums) {
  let result = {
    min: nums[0],
    max: nums[0]
  }

  for (let i = 0; i < nums.length; i++) {
    if (result.min > nums[i]) {
      result.min = nums[i];
    }
    if (result.max < nums[i]) {
      result.max = nums[i];
    }
  }

  return result;
}

const result1 = minMax(array1);
const result2 = minMax(array2);

console.log(result1);
console.log(result2);