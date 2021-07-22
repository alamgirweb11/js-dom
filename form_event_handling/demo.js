// get form id
let form = document.getElementById('form');
form.addEventListener('submit', function(e){
      e.preventDefault();
      let formData  = {};
      [...this.elements].forEach(el => {
              if(el.type != 'submit'){
                      formData[el.name] = el.value;
              }
      })
//       get input result
       console.log(formData);
       this.reset();
})