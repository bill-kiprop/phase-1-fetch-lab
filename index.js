function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(booksData) {
  
  console.log(booksData);
  
  const bookTitles = booksData.map((book) => book.name);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
