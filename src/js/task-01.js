const categories = document.querySelector('#categories');
// console.log('Number of categories:', categories.children.length);
console.log(`Number of categories:  ${categories.children.length}`)
const categoriesEl = document.querySelectorAll('.item');
categoriesEl.forEach(element => {
    // console.log('Category:' , element.firstElementChild.textContent);
    // console.log('Elements:', element.lastElementChild.children.length);
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Category: ${element.lastElementChild.children.length}`);
})