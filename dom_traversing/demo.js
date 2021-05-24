// // DOM traversing
// //get ul list elelement
// let list = document.getElementById('list');
// console.log(list);

// // get ul parent element
// let parent = list.parentElement;
// console.log(parent);

// // get children element
// let children = list.children;
// console.log(children);

// // previous sibling
// let prevSibling = list.previousSibling;
// // console.log(prevSibling); // return nodeElements
// // get htmlElement using previousElementSibling method
// console.log(list.previousElementSibling);

// // get nextsibling 
// console.log(list.nextElementSibling);

// // get first child of ul
// console.log(list.firstElementChild);

// // get last child of ul
// console.log(list.lastElementChild);

// // get sibling using querySelector 
// let lists = document.querySelector('li');
// console.log(lists.nextElementSibling);

// DOM Travesing using foreach loop
let listItem = document.getElementsByTagName('li');
//  javascript element like array but it not an array
// convert HTMLElement to array
// let listItems = Array.from(listItem); // first way
// let listItems = Array.prototype.slice.apply(listItem); // second way 
let listItems  = [...listItem];
listItems.forEach((li,index) => {
      let text = li.innerHTML;
      li.innerHTML = `(${index+1}) ${text}`;
});