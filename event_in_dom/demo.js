let btn = document.getElementById('btn');
// console.dir(btn);

// btn.onclick = function(e){
//          console.log(e);
// }

// btn.addEventListener('click', function(e){
//         alert('I am from onclick method.');
// });

// add new li if click the button
let list = document.getElementById('list');
btn.addEventListener('click', function(e){
           let item = list.lastElementChild.cloneNode(true);
            item.innerHTML = 'New element of ul';
          list.appendChild(item);
});

// event delegation problem
// if i create a new li and try to remove to it, doesn't work
// [...list.children].forEach(li => {
//         li.onclick = function(e){
//                 e.target.remove()
//         };
// })

// solve the delegation problem
list.addEventListener('click', function(e){
         if(this.contains(e.target)){
                e.target.remove()    
         }
})

// box with mousemove method
let box = document.getElementById('box');
box.addEventListener('mousemove',function(e){
                document.getElementById('x-value').innerHTML = e.offsetX;
                document.getElementById('y-value').innerHTML = e.offsetY;
                if(e.offsetX == 50 && e.offsetY == 50){
                        alert('done')
                }
})