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

let book = document.querySelector('#book-list li .name');
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

let h2 = document.querySelector('#book-list h2');

h2.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e);
});

let btns = document.querySelectorAll('#book-list .delete');

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let li = e.target.parentElement;
    li.parentNode.removeChild(li);
  })
});

let link = document.querySelector('#page-banner a');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('link navigation', e.target.textContent);
})
