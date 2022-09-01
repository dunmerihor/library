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
    return `${this.title} by ${this.author}, ${this.pages} pages, `;
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
    for (let i = 0; i < myBooks.length; i++) {
        const bookItem = document.createElement('div');
        const bookInfoContainer = document.createElement('div');
        bookItem.classList.add('book-item');

        const deleteButton = document.createElement('button');
        const bookInfo = document.createElement('span');
        const readStatus = document.createElement('span');

        readStatus.textContent = myBooks[i].read ? ' read' : ' not read yet';
        readStatus.id = `${i}`;
        readStatus.addEventListener('click', e => changeReadStatus(e.target.id));
        bookInfo.textContent = myBooks[i].info();
        deleteButton.textContent = 'x';
        deleteButton.id = `${i}`;
        deleteButton.addEventListener('click', e => deleteBook(e.target.id));

        bookInfoContainer.appendChild(bookInfo);
        bookInfoContainer.appendChild(readStatus);
        bookItem.appendChild(bookInfoContainer);
        bookItem.appendChild(deleteButton);
        bookList.insertBefore(bookItem, bookList.firstChild);
    }
}

function deleteBook(id) {
    myBooks.splice(Number(id), 1); 
    refreshBookList();
}

function changeReadStatus(id) {
    myBooks[id].read = myBooks[id].read ? false : true;
    refreshBookList();
}

function addBookToLibrary() {
    const title = document.querySelector('input[name="book"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const pages = document.querySelector('input[name="pages"]').value;
    const read = document.querySelector('input[name="read"]').checked;
    
    const newBook = new Book(title, author, pages, read); 
    myBooks.push(newBook);
    refreshBookList();
    hideForm();
} 