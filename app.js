// DOM Manipulation

// Creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding elements
ul.append(li);

// Modifying the text

const firstListItem = document.querySelector('.list-items');

// All three methods are similar, but with nuances.
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML); //! Presents potential security risk.

li.innerText = 'X-men';