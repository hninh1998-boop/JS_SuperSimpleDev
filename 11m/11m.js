const array1 = [1, -3, 5];
const array2 = [-2, 3, -5, 7, 10];

const array3 = [];
const array4 = [3];

function minMax(nums) {
  let result = {
    min: null,
    max: null
  }

  if (!nums) {
    result = {
      min: null,
      max: null
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (result.min > nums[i] || !result.min) {
        result.min = nums[i];
      }
      if (result.max < nums[i] || !result.max) {
        result.max = nums[i];
      }
    }
  }

  return result;
}

const result1 = minMax(array1);
const result2 = minMax(array2);
const result3 = minMax(array3);
const result4 = minMax(array4);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);