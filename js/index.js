import displayDate from '../modules/dateDisplay.js';
import addBooks from '../modules/addBooks.js';
import showSection from '../modules/showSection.js';

class BookList {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.inputTitle = document.getElementById('title');
    this.inputAuthor = document.getElementById('author');
    this.inputButton = document.getElementById('add-button');
    this.listButton = document.getElementById('contact-section');
    this.newButton = document.getElementById('form-section');
    this.books = JSON.parse(localStorage.getItem('book')) || [];
    this.inputButton.addEventListener('click', (event) => this.addBooks(event, bookList)); // eslint-disable-line no-use-before-define
    this.displayBooks();

    this.listLink = document.getElementById('list');
    this.addLink = document.getElementById('new');
    this.contactLink = document.getElementById('contact');

    this.listLink.addEventListener('click', () => this.showSection('div-list'));
    this.addLink.addEventListener('click', () => this.showSection('form-section'));
    this.contactLink.addEventListener('click', () => this.showSection('contact-section'));

    this.displayDate('date');
  }

    displayBooks = () => {
      if (!this.bookList) return;

      this.bookList.innerHTML = '';
      const list = document.createElement('ul');
      list.classList.add('list-container');

      for (let i = 0; i < this.books.length; i += 1) {
        const book = this.books[i];

        const listItem = document.createElement('li');

        const booksInfo = document.createElement('span');
        booksInfo.textContent = `${book.title} by ${book.author}`;
        listItem.classList.add(i % 2 === 0 ? 'even' : 'odd');
        listItem.appendChild(booksInfo);
        const removeButton = document.createElement('button');
        removeButton.id = `remove-button-${this.books[i].id}`;

        removeButton.textContent = 'remove';
        removeButton.setAttribute('data-index', i);

        listItem.appendChild(removeButton);
        list.appendChild(listItem);
      }
      this.bookList.appendChild(list);
      this.attachRemoveButtonListeners();
    };

    attachRemoveButtonListeners = () => {
      const removeButtons = document.querySelectorAll("button[id^='remove-button-']");
      removeButtons.forEach((button) => {
        button.addEventListener('click', this.removeBook.bind(this));
      });
    };

    displayDate = () => {
      displayDate('date');
    };

    removeBook = (event) => {
      const bookIndex = event.target.dataset.index;
      this.books.splice(bookIndex, 1);
      localStorage.setItem('book', JSON.stringify(this.books));
      this.displayBooks();
    };

    addBooks = addBooks.bind(this);

    showSection = showSection.bind(this);
}

const bookList = new BookList();

export default bookList;
