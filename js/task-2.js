const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];


//Варіант за одну операцію!
const listOfIngredients = document.querySelector('#ingredients');
const liArr = [];
const listOfItems = ingredients.map(ingredient => {

    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    liArr.push(listItem);

}).join('');
console.log(listOfItems);


listOfIngredients.append(...liArr);
console.log(listOfIngredients);

//Варіант з повторним звертанням до DOM
/* const listOfIngredients = document.querySelector('#ingredients');

const singleIngredient = ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listOfIngredients.append(listItem);
    console.log(listOfIngredients);
}); */



//Варіант з "ручним введенням лішок"
/* const listOfIngredients = document.querySelector('#ingredients');

const listOfItems = ingredients.map(ingredient => {

    return '<li>' + ingredient + '</li>';


}).join(' ');
listOfIngredients.innerHTML = listOfItems;
console.log(listOfIngredients); */