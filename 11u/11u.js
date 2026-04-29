const foods1 = ['egg', 'apple', 'egg', 'egg', 'ham'];

// let setFoods1 = foods1.slice();
// setFoods1.reverse();

// console.log(foods1);
// console.log(setFoods1);

function removeEgg(foods) {
  let setFoods = foods.slice();
  let foodsReturn = [];
  let countEgg = -1;

  setFoods.reverse();

  for (let i = 0; i < setFoods.length; i++) {
    if (setFoods[i] === 'egg') {
      countEgg++;
      if (countEgg <= 1) {
        continue;
      } else {
        foodsReturn.push(setFoods[i]);
      }
    } else {
      foodsReturn.push(setFoods[i]);
    }
  }

  foodsReturn.reverse();
  return foodsReturn;
}

console.log(removeEgg(foods1));
console.log(foods1);