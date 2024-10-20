const container = document.querySelector('#output');
const newBookButton = document.getElementById('new-book');
const addBookButton = document.getElementById('add-book');
const dialog = document.getElementById('dialog');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

//======== is it read? ============================
let read = "";
const readStatus = document.querySelectorAll('.read-button');
readStatus.forEach(input => input.addEventListener("click", (e) => {
    if (e.target.id === 'yes') {
        read = 'YES';
    } else if (e.target.id === 'no') {
        read = 'NO';
    }
}));
//======= end is it read ======================

//store books array
const myLibrary = [];

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

//create new book and push the new book to library array
const addBookToLibrary = (title, author, pages, read) => {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

//check if book is in library then remove it from dom 
//this function will duplicate each entry; so we remove one of each duplicate
const sanitizeDom = () => {
    const allBookDivs = document.querySelectorAll('div');

    allBookDivs.forEach(div => {
        if (myLibrary.indexOf(div.id)) {
            container.removeChild(div);
        }
    });

    //map library
    myLibrary.map((book, index) => {

        //append book elements to dom
        container.innerHTML += `
        <div class="book-card" id="${index}">
            <h1>${book.title}</h1>
            <h3>${book.author}</h3>
            <span>Pages: ${book.pages}</span>
            <br>
            <span>Read book: ${book.read}</span>
        </div>
    `;
    }
    );

    //clear form fields
    title.value = '';
    author.value = '';
    pages.value = '';
    read = '';
};

newBookButton.addEventListener("click", () => {
    //show modal form element
    dialog.showModal();
});

addBookButton.addEventListener("click", (e) => {
    //prevent default form submission
    e.preventDefault();
    //call add book to library function to create new book using form data
    addBookToLibrary(title.value, author.value, pages.value, read);
    //call render function to append books to dom
    sanitizeDom();

    //close modal form element (not needed for modal; 
    //only used as a fallback method)
    dialog.close();
});

const cancelModal = document.getElementById('cancel');

cancelModal.addEventListener("click", () => {
   //this line is to watch the result in console , you can remove it later
    console.log("Refreshed"); 
});