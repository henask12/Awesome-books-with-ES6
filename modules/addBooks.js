import Book from './books.js';

const addBooks = (event, bookList) => {
  event.preventDefault();
  const title = bookList.inputTitle.value;
  const author = bookList.inputAuthor.value;
  if (title !== '' && author !== '') {
    const book = new Book(Date.now(), title, author);
    bookList.books = [book, ...bookList.books];
    localStorage.setItem('book', JSON.stringify(bookList.books));
  }
  bookList.displayBooks();
  bookList.inputAuthor.value = '';
  bookList.inputTitle.value = '';
};

export default addBooks;
