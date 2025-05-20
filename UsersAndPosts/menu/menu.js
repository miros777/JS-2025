const divMenu = document.getElementById('menu');

const ul = document.createElement('ul');
const li = document.createElement('li');

li.innerHTML = '<a href="index.html">HOME</a>';
ul.appendChild(li);

divMenu.appendChild(ul);

