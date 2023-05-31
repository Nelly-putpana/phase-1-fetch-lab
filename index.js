async function asyncfetchBooks() {
  const url = "https://anapioficeandfire.com/api/books"
  const response = await fetch(url).then(r=>r.json())
 
  renderBooks (response)

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
  asyncfetchBooks();
});
