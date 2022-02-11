let banner = document.getElementById('page-banner');
let bookList = document.getElementById('book-list')
console.log(banner);
console.log(bookList);

let titles = document.getElementsByClassName('title');
console.log(titles);
Array.from(titles).forEach(title => {
  console.log(title);
})

let lis = document.getElementsByTagName('li');
console.log(lis);
Array.from(lis).forEach(li => {
  console.log(li);
})

