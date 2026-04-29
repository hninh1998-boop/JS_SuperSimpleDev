const array1 = ['green', 'red', 'blue', 'red'];
const array2 = ['red', 'green', 'green', 'red'];

function findIndex(array,word) {
  let num = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      num = i;
      break;
    }
  }

  return num;
}

function unique(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const num = findIndex(array,array[i]);
    if (num === i) {
      result.push(array[i]);
    }
  }

  return result;
}

const result1 = unique(array1);
const result2 = unique(array2);
console.log(result1);
console.log(result2);