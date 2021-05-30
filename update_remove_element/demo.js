// update first element of ul
let firstLi = document.getElementById('first_li');
setTimeout(()=>{
      firstLi.innerHTML = firstLi.innerHTML+'(Modified)'
      firstLi.style.background = 'gray'
      firstLi.style.color = 'white'
}, 3000);

// remove last element of ul
// let list = document.getElementsByTagName('ul')
let lastLi = document.getElementById('last_li')
setTimeout(()=>{
      // lastLi.innerHTML = lastLi.innerHTML+'(Modified)'
      lastLi.remove()
},2000)