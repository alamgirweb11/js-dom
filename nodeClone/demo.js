// update first element of ul
let firstLi = document.getElementById('first_li');
setTimeout(()=>{
      firstLi.innerHTML = firstLi.innerHTML+'(Modified)'
      firstLi.style.background = 'gray'
      firstLi.style.color = 'white'
}, 3000);

// remove last element of ul
let list = document.getElementById('list')
// let lastLi = document.getElementById('last_li')
// setTimeout(()=>{
//       lastLi.remove()
// },2000)

// console.log(list);
let addItemLi = list.lastElementChild.cloneNode();
addItemLi.innerHTML = 'Six';
list.appendChild(addItemLi);