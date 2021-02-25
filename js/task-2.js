const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
const listOfIngredients = document.querySelector('#ingredients');

const singleIngredient = ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listOfIngredients.append(listItem);
    console.log(listOfIngredients);
});