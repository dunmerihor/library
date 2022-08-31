let myBook = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
}

function showForm() {
    const background = document.querySelector('div.hidden-background');
    background.classList.remove('hidden-background');
    background.classList.add('background');
    const body = document.querySelector('body');
    body.appendChild(background);
}

function addBookToLibrary() {

}