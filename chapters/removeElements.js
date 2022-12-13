// DOM Manipulation

// Creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding elements
ul.append(li);

// Modifying the text

const firstListItem = document.querySelector('.list-items');

// All three methods are similar, but with nuances.
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML); //! Presents potential security risk.

li.innerText = 'X-men';

// Modifying attributes & classes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));

li.classList.add('list-items');
// li.classList.remove('list-items');

// Remove elements
li.remove();