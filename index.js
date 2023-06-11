function fetchBooks() {
  const url = "https://anapioficeandfire.com/api/books"
  fetch (url)
  .then(function (response) {
    return response.json();
  })
  .then (function (books) {
    renderBooks(books);
  });
  return fetch(url);
}

function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      fetchBooks();
    });