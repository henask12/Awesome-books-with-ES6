export default function displayBooks() {
    this.bookList.innerHTML = "";
    const list = document.createElement("ul");
    list.classList.add("list-container");

    for (let i = 0; i < this.books.length; i += 1) {
        const book = this.books[i];

        const listItem = document.createElement("li");

        const booksInfo = document.createElement("span");
        booksInfo.textContent = `${book.title} by ${book.author}`;
        listItem.classList.add(i % 2 === 0 ? "even" : "odd");
        listItem.appendChild(booksInfo);
        const removeButton = document.createElement("button");
        removeButton.id = `remove-button-${this.books[i].id}`;

        removeButton.textContent = "remove";
        removeButton.setAttribute("data-index", i);

        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    }
    this.bookList.appendChild(list);
    this.attachRemoveButtonListeners();
}
