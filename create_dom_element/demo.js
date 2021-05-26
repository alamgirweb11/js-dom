let li = createNewElement('li', 'list-group-item', 'Six');
li.className = 'list-group-item';

let list = document.getElementById('list');
list.appendChild(li);


let para1 = createNewElement('p', 'paragraph1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');


let para2 = createNewElement('p', 'paragraph2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');

para2.style.color = "red";
let div = createNewElement('div', 'all_text');
append(div, [para1,para2]);

// display all text in html page
document.getElementById('container').appendChild(div)

// let container = document.getElementById('container');
// container.appendChild(div);

// function for set tagname, classname, value
function createNewElement(tagName, className, innerHTML){
      let tag = document.createElement(tagName);
      tag.className = className || '';
      tag.innerHTML = innerHTML || '';
      return tag;
}

// function for append element
function append(parent,children){
        children.forEach(child => parent.appendChild(child));
}