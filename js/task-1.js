const categories = document.querySelector('#categories');
const mainLi = document.querySelectorAll('.item');
console.log(mainLi);
// кількість категорій в ul#categories
const mainLiQuantity = mainLi.length;
console.log(`У списку ${mainLiQuantity} категорії.`);

//текст заголовка елемента (тега h2) li.item.
const titleTextOfMainLi = categories.querySelectorAll('h2');
console.log(titleTextOfMainLi);

// кількість елементів в категорії
const titles = titleTextOfMainLi.forEach(title => {

    const liInMainLi = title.nextElementSibling.querySelectorAll('li');
    const liQuantity = liInMainLi.length;
    console.log(`Категорія: ${title.textContent}
	  Кількість елементів: ${liQuantity}`);
});