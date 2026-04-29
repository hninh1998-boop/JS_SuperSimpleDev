const foods1 = ['egg', 'apple', 'egg', 'egg', 'ham'];

function removeEgg(foods) {
  let foodsReturn = [];
  let countEgg = -1;

  foods.reverse();

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      countEgg++;
      if (countEgg <= 1) {
        continue;
      } else {
        foodsReturn.push(foods[i]);
      }
    } else {
      foodsReturn.push(foods[i]);
    }
  }

  foodsReturn.reverse();

  return foodsReturn;
}

console.log(removeEgg(foods1));