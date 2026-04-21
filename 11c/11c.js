const array1 = [1,20,22,24,5];
const array2 = ['hi','hello','good'];

function arraySwap(array) {
  let result = array;
  const firstValue = result[0];
  const lastValue = result[result.length - 1];

  result[0] = lastValue; 
  result[result.length - 1] = firstValue; 

  return result;
}

result1 = arraySwap(array1);
result2 = arraySwap(array2);
console.log(result1);
console.log(result2);