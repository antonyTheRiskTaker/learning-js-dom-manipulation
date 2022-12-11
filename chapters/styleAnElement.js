// DOM Manipulation

const title = document.querySelector('#main-heading');

// Equivalent to HTML inline styling
title.style.color = 'red';

const listItems = document.querySelectorAll('.list-items');

// listItems.style.fontSize = '2rem';

for (listItem of listItems) {
  listItem.style.fontSize = '5rem';
}

console.log(listItems);