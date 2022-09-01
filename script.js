let myBooks = [];

const bookForm = document.querySelector('.book-form');
bookForm.addEventListener('click', e => e.stopPropagation());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.read ? `${this.title} by ${this.author}, ${this.pages} pages, read` :
     `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
}

function showForm() {
    const background = document.querySelector('div.hidden-background');
    background.classList.remove('hidden-background');
    background.classList.add('background');
}

function hideForm() {
    const background = document.querySelector('div.background');
    background.classList.remove('background');
    background.classList.add('hidden-background');
}

function refreshBookList() {
    const oldBookList = Array.from(document.querySelectorAll('.book-item'));
    oldBookList.forEach(elem => elem.remove());

    const bookList = document.querySelector('ul.books');
    for (book of myBooks) {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.textContent = book.info();
        bookList.insertBefore(bookItem, bookList.firstChild);
    }
}

function addBookToLibrary() {
    const title = document.querySelector('input[name="book"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const pages = document.querySelector('input[name="pages"]').value;
    const read = document.querySelector('input[name="read"]').value;

    const newBook = new Book(title, author, pages, read);
    myBooks.push(newBook);
    refreshBookList();
    hideForm();
}