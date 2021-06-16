// get check box name
let inputSkills = document.getElementsByName('skills');
// see output id
let result = document.getElementById('result');
// set all append value in checkVal array
let checkedVal = [];
// append each check box
[...inputSkills].forEach(skill => {
          skill.addEventListener('change', function(event){
              //    get checked value
                  if(event.target.checked){
                     checkedVal.push(event.target.value) 
                     getOutput(result, checkedVal);
                  }
              //     reset value after unchecked
                  else{
                          let index = checkedVal.indexOf(event.target.value);
                          checkedVal.splice(index, 1);
                          getOutput(result, checkedVal);
                  }
          });

// get result function
          function getOutput(parent, skills){
                  let result = '';
                  skills.forEach((skill, index) => {
                          result += `${index +1}. ${skill} `;
                  });
                  parent.innerHTML = result
          }
})