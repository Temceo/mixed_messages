const recipeGenerator = {
  //   day: "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),
  breakfast:
    "Cinnamon Breakfast Muffins, Waffles, Cereals, Ham and cheese omelette, Scrambled Eggs".split(
      ", "
    ),
  lunch:
    "Caribbean Chicken Salad, Caesar Salad, Chicken Sandwich, Egg Noodles".split(
      ", "
    ),
  dinner:
    "Harissa Meatballs, Bajan Spicy Fish, Beef Curry, Chicken Drumsticks".split(
      ", "
    ),
};

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const dayMeal = [];

for (let prop in recipeGenerator) {
  // get random index
  const indexNum = getRandomNumber(recipeGenerator[prop].length);
  switch (prop) {
    case "breakfast":
      dayMeal.push(`BREAKFAST: ${recipeGenerator[prop][indexNum]}`);
      break;
    case "lunch":
      dayMeal.push(`LUNCH: ${recipeGenerator[prop][indexNum]}`);
      break;
    case "dinner":
      dayMeal.push(`DINNER: ${recipeGenerator[prop][indexNum]}`);
  }
}

const showMessage = (mealArray) => {
  console.log("=====================================");
  console.log("YOUR RECOMMENDED MEALS FOR TODAY");
  console.log("-------------------------------------");
  const formattedMsg = mealArray.join("\n");
  console.log(formattedMsg);
  console.log("-------------------------------------");
};

showMessage(dayMeal);
