
let list = document.getElementById('list')
let lastLi = list.lastElementChild;
// console.log(list.attributes);
// first method to add attribute
// lastLi.setAttribute('id', 'list_6')
// second method to add attribute
let attr = document.createAttribute('title')
attr.value = 'I am six number list item'
lastLi.setAttributeNode(attr)

// third method to add attribute
lastLi.id = 'last_item'