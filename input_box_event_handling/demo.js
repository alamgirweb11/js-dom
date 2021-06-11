// get input box id
let getName = document.getElementById('name');
getName.addEventListener('keypress', function(e){
       if(e.key == 'Enter'){
             // set the showing value id
              document.getElementById('yourName').innerHTML = `Your name is ${e.target.value}`;
              // remove letter after enter
              e.target.value = '';
       }
       
})