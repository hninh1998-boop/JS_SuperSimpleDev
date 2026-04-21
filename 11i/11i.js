const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [-2, -1, 0, 99];

function addNum(array, num) {
  let result = array;
  
  for (let i = 0; i < result.length; i++) {
    result[i] += num;
  }
  return result;
}

result1 = addNum(array1, 2);
result2 = addNum(array2, 3);
result3 = addNum(array3, 2);

console.log(result1);
console.log(result2);
console.log(result3);
