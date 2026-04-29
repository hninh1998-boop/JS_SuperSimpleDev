const array1 = ['green','red','blue','red'];

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

const num1 = findIndex(array1,'red');
const num2 = findIndex(array1,'yellow');

console.log(num1);
console.log(num2);