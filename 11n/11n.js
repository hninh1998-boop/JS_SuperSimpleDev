const array1 = ['apple', 'grape', 'apple', 'apple'];

function countWords(array) {
  let result = {};
  let objectCheck = '';

  for (let i = 0; i < array.length; i++) {
    objectCheck = array[i];

    if (objectCheck === array[i]) {
      if (!result[objectCheck]) {
        result[objectCheck] = 1;
      } else {
        result[objectCheck]++;
      }
    } else {
      result[objectCheck] = 1;
    }
  }

  return result;
}

const result1 = countWords(array1);
console.log(result1);