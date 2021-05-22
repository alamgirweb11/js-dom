// use getElement for single item

//select id
// let title = document.getElementById('title');
// console.log(title);

 // use getElements for multiple item

 // select all same classes
// let paragraph = document.getElementsByClassName('para');
// console.log(paragraph);

// select same all tag
// let list = document.getElementsByTagName('li');
// console.log(list);

// select name attribute
// let name = document.getElementsByName('item1');
// console.log(name);

// all about querySelector
// querySelector use for  single item

// select id
let title = document.querySelector('#title');
console.log(title);

// querySelectorAll use for multiple item

// select single class
let paragraph = document.querySelector('.para');
console.log(paragraph);

// select multiple classes
let paragraphs = document.querySelectorAll('.para');
console.log(paragraphs);

// select multiple tag value
let list = document.querySelectorAll('li');
console.log(list);

// select name attribute
let name = document.querySelector('[name="item1"]');
console.log(name);
