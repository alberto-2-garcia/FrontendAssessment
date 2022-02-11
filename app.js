let banner = document.getElementById('page-banner');
// let bookList = document.getElementById('book-list')
// console.log(banner);
// console.log(bookList);
// console.log('Node type', banner.nodeType);
// console.log('Node name', banner.nodeName);
// console.log('Node hasChildren', banner.hasChildNodes());
// let clonedBanner = banner.cloneNode(false);
// console.log(clonedBanner);

let titles = document.getElementsByClassName('title');
// console.log(titles);
// Array.from(titles).forEach(title => {
//   console.log(title);
// })

let lis = document.getElementsByTagName('li');
// console.log(lis);
// Array.from(lis).forEach(li => {
//   console.log(li);
// })

let wrap = document.querySelector('#wrapper')
// console.log(wrap);

let liBook = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(liBook);

// let book = document.querySelector('#book-list li .name');
// console.log(book);

let books = document.querySelectorAll('#book-list li .name');
// console.log(books);
// Array.from(books).forEach(book => {
//   console.log(book)
// })

books.forEach(book => {
  book.textContent += ' (book title)';
})

let bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>'
// bookList.innerHTML += '<p>This is how you add HTML</p>'
// console.log('node parent', bookList.parentNode)
// console.log('node elemnt', bookList.parentElement)
// console.log('node childNodes', bookList.childNodes)
// console.log('node children', bookList.children)
// console.log('node next sibling', bookList.nextSibling);
// console.log('node nextElementSibling', bookList.nextElementSibling);
// console.log('node previousSibling', bookList.previousSibling);
// console.log('node previousElementSibling', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else!'

// let h2 = document.querySelector('#book-list h2');

// h2.addEventListener('click', (e) => {
//   console.log(e.target);
//   console.log(e);
// });

// let btns = document.querySelectorAll('#book-list .delete');

// btns.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     let li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   })
// });

let link = document.querySelector('#page-banner a');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('link navigation', e.target.textContent);
})

let list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {
  if(e.target.className == 'delete') {
    let li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
})

let addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let value = addForm.querySelector('input[type="text"]').value;
  console.log(value);

  let li = document.createElement('li');
  let bookName = document.createElement('span');
  let deleteBtn = document.createElement('span');

  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

let book = document.querySelector('li:first-child .name');
console.log(book);
console.log('get class', book.getAttribute('class'));
console.log('get href', book.getAttribute('href'));
console.log('set class', book.setAttribute('class', 'name-2'));
console.log('get class', book.getAttribute('class'));

console.log('-------')

console.log('has class', book.hasAttribute('class'));
console.log('has href', book.hasAttribute('href'));

console.log('-------')

console.log('remove class', book.removeAttribute('class'));
console.log('has class', book.hasAttribute('class'));
console.log('set class', book.setAttribute('class', 'name'));
console.log('get class', book.getAttribute('class'));
