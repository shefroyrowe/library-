const container = document.querySelector('main');

const myLibrary = []; //store books

//book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = () => {
        return `"${this.title}, ${this.author}, ${this.pages}, ${this.read}"`;
    }
}

function addBookToLibrary() {
    //create new book
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);//push book to library

    //create html book elements
    const card = document.createElement('div');
    const cardTitle = document.createElement('h1');
    const cardAuthor = document.createElement('h3');
    const cardpages = document.createElement('span');
    const cardRead = document.createElement('span');

    //asign values to and append elements
    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardpages.textContent = book.pages;
    cardRead.textContent = book.read;

    //append elements to card
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardpages);
    card.appendChild(cardRead);

    //append elements to dom
    container.innerHTML += card;
}
