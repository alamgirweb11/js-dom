// list and input event handler
let list = document.getElementById('list');

list.addEventListener('dblclick', function(event){
        if(this.contains(event.target)){
                let innerText = event.target.innerText;
                event.target.innerHTML = '';
                let inputBox = createInputBox(innerText);
                event.target.appendChild(inputBox);

               inputBox.addEventListener('keypress', function(e){
                      if(e.key == 'Enter'){
                            e.target.innerHTML = e.target.value;
                      }
               })
        }
});


function createInputBox(value){
            let inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.className = 'form-control';
            inputField.value = value;

            return inputField;
}
