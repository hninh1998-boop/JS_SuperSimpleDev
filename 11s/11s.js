const foods1 = ['egg', 'apple', 'egg', 'egg', 'ham'];

function removeEgg(foods) {
  let foodsReturn = [];
  let count = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      count++;
      if (count !== 2) {
        continue;
      } else {
        foodsReturn.push(foods[i]);
      }
    } else {
      foodsReturn.push(foods[i]);
    }
  }

  return foodsReturn;
}

const foodsReturn1 = removeEgg(foods1);
console.log(foodsReturn1);