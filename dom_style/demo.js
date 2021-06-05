let title = document.getElementById('title');
title.style.color = 'red';
let domStyle = {
        background: 'gray',
        fontSize: '25px',
        color: 'white'
};
let list = document.getElementById('list');
[...list.children].forEach(li => Object.assign(li.style, domStyle));

